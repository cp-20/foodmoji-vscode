import * as vscode from 'vscode';
import { GitExtension, Repository } from './git';
import Foodmoji from './foodmoji';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.showFoodmoji', (uri?) => {
        const git = getGitExtension();

        if (!git) {
            vscode.window.showErrorMessage('Unable to load Git Extension');
            return;
        }

        let addCustomEmoji: Array<any> = vscode.workspace.getConfiguration().get('foodmoji.addCustomEmoji') || [];

        const showEmojiCode: boolean | undefined = vscode.workspace.getConfiguration().get('foodmoji.showEmojiCode');

        let emojis = [];
        let onlyUseCustomEmoji: boolean | undefined = vscode.workspace.getConfiguration().get('foodmoji.onlyUseCustomEmoji');

        if (onlyUseCustomEmoji === true) {
            emojis = [...addCustomEmoji];
        } else {
            emojis = [...Foodmoji, ...addCustomEmoji];
        }

        const items = emojis.map(emojiObj => {
            const { description, code, emoji } = emojiObj;
            const displayCode = showEmojiCode ? code : '';
            const label = `${emoji} ${description} ${displayCode}`;
            return {
                label,
                code,
                emoji,
            };
        });

        vscode.window.showQuickPick(items).then(function (selected) {
            if (selected) {
                vscode.commands.executeCommand('workbench.view.scm');
                const outputType = vscode.workspace.getConfiguration().get('foodmoji.outputType');
                const valueToAdd = outputType === 'emoji' ? selected.emoji : selected.code;
                const asSuffix: boolean | undefined = vscode.workspace.getConfiguration().get('foodmoji.asSuffix') || false;

                if (uri) {
                    const uriPath = uri._rootUri?.path || uri.rootUri.path;
                    let selectedRepository = git.repositories.find(repository => repository.rootUri.path === uriPath);
                    if (selectedRepository) {
                        updateCommit(selectedRepository, valueToAdd, asSuffix);
                    }
                } else {
                    for (let repo of git.repositories) {
                        updateCommit(repo, valueToAdd, asSuffix);
                    }
                }
            }
        });
    });

    context.subscriptions.push(disposable);
}

function updateCommit(repository: Repository, valueOfFoodmoji: String, asSuffix: boolean) {
    if (!asSuffix) {
        repository.inputBox.value = `${valueOfFoodmoji} ${repository.inputBox.value}`;
    } else {
        repository.inputBox.value = `${repository.inputBox.value} ${valueOfFoodmoji}`;
    }
}

function getGitExtension() {
    const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
    const gitExtension = vscodeGit && vscodeGit.exports;
    return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}

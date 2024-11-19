import * as vscode from 'vscode';
import { Git, GitExtension, Repository } from './git';
import Foodmoji from './foodmoji';

const getConfigs = () => ({
    addCustomEmoji: (vscode.workspace.getConfiguration().get('foodmoji.addCustomEmoji') || []) as { code: string; emoji: string; description: string }[],
    onlyUseCustomEmoji: vscode.workspace.getConfiguration().get('foodmoji.onlyUseCustomEmoji') as boolean | undefined,
    showEmojiCode: vscode.workspace.getConfiguration().get('foodmoji.showEmojiCode') as boolean | undefined,
    outputType: vscode.workspace.getConfiguration().get('foodmoji.outputType') as 'emoji' | 'code',
    asSuffix: vscode.workspace.getConfiguration().get('foodmoji.asSuffix') as boolean,
});

const getEmojis = () => {
    const { addCustomEmoji: customEmojis, onlyUseCustomEmoji } = getConfigs();
    if (onlyUseCustomEmoji) {
        return [...customEmojis];
    } else {
        return [...Foodmoji, ...customEmojis];
    }
};

export const activate = (context: vscode.ExtensionContext) => {
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.showFoodmoji', (uri?) => {
            const emojis = getEmojis();

            const { showEmojiCode } = getConfigs();
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

            vscode.window.showQuickPick(items).then(selected => {
                if (!selected) return;
                vscode.commands.executeCommand('workbench.view.scm');
                updateCommitWithEmoji(uri, selected);
            });
        }),
        vscode.commands.registerCommand('extension.addRandomFoodmoji', (uri?) => {
            const emojis = getEmojis();
            const randomIndex = Math.floor(Math.random() * emojis.length);
            const randomEmoji = emojis[randomIndex];
            vscode.commands.executeCommand('workbench.view.scm');
            updateCommitWithEmoji(uri, randomEmoji);
        })
    );
};

const updateCommitWithEmoji = (uri: any, emoji: { emoji: string; code: string }) => {
    const git = getGitExtension();

    if (!git) {
        vscode.window.showErrorMessage('Unable to load Git Extension');
        return;
    }

    const { outputType, asSuffix } = getConfigs();
    const valueToAdd = outputType === 'emoji' ? emoji.emoji : emoji.code;

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
};

const updateCommit = (repository: Repository, valueOfFoodmoji: String, asSuffix: boolean) => {
    if (!asSuffix) {
        repository.inputBox.value = `${valueOfFoodmoji} ${repository.inputBox.value}`;
    } else {
        repository.inputBox.value = `${repository.inputBox.value} ${valueOfFoodmoji}`;
    }
};

const getGitExtension = () => {
    const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
    const gitExtension = vscodeGit && vscodeGit.exports;
    return gitExtension && gitExtension.getAPI(1);
};

export const deactivate = () => {};

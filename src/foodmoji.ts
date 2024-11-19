import * as vscode from 'vscode';

interface foodmojiList {
    readonly emoji: any;
    readonly code: any;
    readonly description: any;
}

let Foodmoji: Array<foodmojiList> = [
    {
        emoji: '🍄',
        code: ':mushroom:',
        description: 'Mushroom / きのこ',
    },
    {
        emoji: '🍏',
        code: ':green_apple:',
        description: 'Green Apple / 青りんご (青リンゴ)',
    },
    {
        emoji: '🍎',
        code: ':apple:',
        description: 'Apple / りんご (リンゴ)',
    },
    {
        emoji: '🍐',
        code: ':pear:',
        description: 'Pear / 梨 (なし)',
    },
    {
        emoji: '🍊',
        code: ':tangerine:',
        description: 'Tangerine / みかん (みかん)',
    },
    {
        emoji: '🍋',
        code: ':lemon:',
        description: 'Lemon / レモン',
    },
    {
        emoji: '🍌',
        code: ':banana:',
        description: 'Banana / バナナ',
    },
    {
        emoji: '🍉',
        code: ':watermelon:',
        description: 'Watermelon / スイカ (すいか)',
    },
    {
        emoji: '🍇',
        code: ':grapes:',
        description: 'Grapes / ブドウ (ぶどう)',
    },
    {
        emoji: '🍓',
        code: ':strawberry:',
        description: 'Strawberry / イチゴ (いちご)',
    },
    {
        emoji: '🫐',
        code: ':blueberries:',
        description: 'Blueberries / ブルーベリー',
    },
    {
        emoji: '🍈',
        code: ':melon:',
        description: 'Melon / メロン',
    },
    {
        emoji: '🍒',
        code: ':cherries:',
        description: 'Cherries / さくらんぼ (サクランボ)',
    },
    {
        emoji: '🍑',
        code: ':peach:',
        description: 'Peach / 桃 (モモ)',
    },
    {
        emoji: '🥭',
        code: ':mango:',
        description: 'Mango / マンゴー',
    },
    {
        emoji: '🍍',
        code: ':pineapple:',
        description: 'Pineapple / パイナップル',
    },
    {
        emoji: '🥥',
        code: ':coconut:',
        description: 'Coconut / ココナッツ',
    },
    {
        emoji: '🥝',
        code: ':kiwi_fruit:',
        description: 'Kiwi / キウイ',
    },
    {
        emoji: '🍅',
        code: ':tomato:',
        description: 'Tomato / トマト',
    },
    {
        emoji: '🍆',
        code: ':eggplant:',
        description: 'Eggplant / ナス (茄子)',
    },
    {
        emoji: '🥑',
        code: ':avocado:',
        description: 'Avocado / アボカド',
    },
    {
        emoji: '🫛',
        code: ':pea_pod:',
        description: 'Pea Pod / エンドウ豆',
    },
    {
        emoji: '🥦',
        code: ':broccoli:',
        description: 'Broccoli / ブロッコリー',
    },
    {
        emoji: '🥬',
        code: ':leafy_green:',
        description: 'Leafy Green / 葉野菜',
    },
    {
        emoji: '🫑',
        code: ':bell_pepper:',
        description: 'Bell Pepper / ピーマン',
    },
    {
        emoji: '🥒',
        code: ':cucumber:',
        description: 'Cucumber / きゅうり (キュウリ)',
    },
    {
        emoji: '🌶️',
        code: ':hot_pepper:',
        description: 'Hot Pepper / 唐辛子',
    },
    {
        emoji: '🌽',
        code: ':corn:',
        description: 'Corn / とうもろこし (トウモロコシ)',
    },
    {
        emoji: '🥕',
        code: ':carrot:',
        description: 'Carrot / ニンジン (人参、にんじん)',
    },
    {
        emoji: '🫒',
        code: ':olive:',
        description: 'Olive / オリーブ',
    },
    {
        emoji: '🧄',
        code: ':garlic:',
        description: 'Garlic / にんにく',
    },
    {
        emoji: '🧅',
        code: ':onion:',
        description: 'Onion / 玉ねぎ (たまねぎ、タマネギ)',
    },
    {
        emoji: '🥔',
        code: ':potato:',
        description: 'Potato / じゃがいも (ジャガイモ)',
    },
    {
        emoji: '🍠',
        code: ':sweet_potato:',
        description: 'Sweet Potato / さつまいも (サツマイモ)',
    },
    {
        emoji: '🫚',
        code: ':ginger_root:',
        description: 'Ginger / 生姜 (ショウガ)',
    },
    {
        emoji: '🥐',
        code: ':croissant:',
        description: 'Croissant / クロワッサン',
    },
    {
        emoji: '🥯',
        code: ':bagel:',
        description: 'Bagel / ベーグル',
    },
    {
        emoji: '🍞',
        code: ':bread:',
        description: 'Bread / パン',
    },
    {
        emoji: '🥖',
        code: ':baguette_bread:',
        description: 'Baguette / バゲット',
    },
    {
        emoji: '🥖',
        code: ':french_bread:',
        description: 'French Bread / フランスパン',
    },
    {
        emoji: '🥨',
        code: ':pretzel:',
        description: 'Pretzel / プレッツェル',
    },
    {
        emoji: '🧀',
        code: ':cheese:',
        description: 'Cheese / チーズ',
    },
    {
        emoji: '🥚',
        code: ':egg:',
        description: 'Egg / 卵 (たまご、タマゴ)',
    },
    {
        emoji: '🍳',
        code: ':cooking:',
        description: 'Fried Egg / 目玉焼き',
    },
    {
        emoji: '🧈',
        code: ':butter:',
        description: 'Butter / バター',
    },
    {
        emoji: '🥞',
        code: ':pancakes:',
        description: 'Pancakes / パンケーキ',
    },
    {
        emoji: '🧇',
        code: ':waffle:',
        description: 'Waffle / ワッフル',
    },
    {
        emoji: '🥓',
        code: ':bacon:',
        description: 'Bacon / ベーコン',
    },
    {
        emoji: '🥩',
        code: ':cut_of_meat:',
        description: 'Cut of Meat / 肉',
    },
    {
        emoji: '🍗',
        code: ':poultry_leg:',
        description: 'Poultry Leg / チキン',
    },
    {
        emoji: '🍖',
        code: ':meat_on_bone:',
        description: 'Meat on Bone / 骨付き肉',
    },
    {
        emoji: '🌭',
        code: ':hotdog:',
        description: 'Hot Dog / ホットドッグ',
    },
    {
        emoji: '🍔',
        code: ':hamburger:',
        description: 'Hamburger / ハンバーガー',
    },
    {
        emoji: '🍟',
        code: ':french_fries:',
        description: 'French Fries / フライドポテト',
    },
    {
        emoji: '🍕',
        code: ':pizza:',
        description: 'Pizza / ピザ',
    },
    {
        code: ':flatbread:',
        emoji: '🫓',
        description: 'Flatbread / フラットブレッド',
    },
    {
        emoji: '🥪',
        code: ':sandwich:',
        description: 'Sandwich / サンドイッチ',
    },
    {
        emoji: '🥙',
        code: ':stuffed_flatbread:',
        description: 'Stuffed Flatbread / 中東風サンドイッチ',
    },
    {
        emoji: '🧆',
        code: ':falafel:',
        description: 'Falafel / ファラフェル',
    },
    {
        emoji: '🌮',
        code: ':taco:',
        description: 'Taco / タコス',
    },
    {
        emoji: '🌯',
        code: ':burrito:',
        description: 'Burrito / ブリトー',
    },
    {
        emoji: '🫔',
        code: ':tamale:',
        description: 'Tamale / タマル',
    },
    {
        emoji: '🥗',
        code: ':salad:',
        description: 'Salad / サラダ',
    },
    {
        code: ':paella:',
        emoji: '🥘',
        description: 'Paella / パエリア',
    },
    {
        code: ':fondue:',
        emoji: '🫕',
        description: 'Fondue / フォンデュ',
    },
    {
        code: ':canned_food:',
        emoji: '🥫',
        description: 'Canned Food / 缶詰',
    },
    {
        emoji: '🍝',
        code: ':spaghetti:',
        description: 'Spaghetti / スパゲッティ',
    },
    {
        emoji: '🍜',
        code: ':ramen:',
        description: 'Ramen / ラーメン',
    },
    {
        emoji: '🍲',
        code: ':stew:',
        description: 'Stew / シチュー',
    },
    {
        emoji: '🍛',
        code: ':curry:',
        description: 'Curry / カレー',
    },
    {
        emoji: '🍣',
        code: ':sushi:',
        description: 'Sushi / 寿司',
    },
    {
        emoji: '🍱',
        code: ':bento:',
        description: 'Bento Box / 弁当',
    },
    {
        emoji: '🥟',
        code: ':dumpling:',
        description: 'Dumpling / 餃子 (ぎょうざ)',
    },
    {
        emoji: '🦪',
        code: ':oyster:',
        description: 'Oyster / 牡蠣',
    },
    {
        emoji: '🍤',
        code: ':fried_shrimp:',
        description: 'Fried Shrimp / エビフライ',
    },
    {
        emoji: '🍙',
        code: ':rice_ball:',
        description: 'Rice Ball / おにぎり',
    },
    {
        emoji: '🍚',
        code: ':rice:',
        description: 'Cooked Rice / ご飯',
    },
    {
        emoji: '🍘',
        code: ':rice_cracker:',
        description: 'Rice Cracker / せんべい',
    },
    {
        emoji: '🍥',
        code: ':fish_cake:',
        description: 'Fish Cake / かまぼこ (なると)',
    },
    {
        emoji: '🥠',
        code: ':fortune_cookie:',
        description: 'Fortune Cookie / おみくじクッキー',
    },
    {
        emoji: '🥮',
        code: ':moon_cake:',
        description: 'Moon Cake / 月餅',
    },
    {
        code: ':oden:',
        emoji: '🍢',
        description: 'Oden / おでん',
    },
    {
        emoji: '🍡',
        code: ':dango:',
        description: 'Dango / 団子',
    },
    {
        emoji: '🍧',
        code: ':shaved_ice:',
        description: 'Shaved Ice / かき氷',
    },
    {
        emoji: '🍨',
        code: ':ice_cream:',
        description: 'Ice Cream / アイスクリーム',
    },
    {
        emoji: '🍦',
        code: ':soft_ice_cream:',
        description: 'Soft Ice Cream / ソフトクリーム',
    },
    {
        emoji: '🥧',
        code: ':pie:',
        description: 'Pie / パイ',
    },
    {
        emoji: '🧁',
        code: ':cupcake:',
        description: 'Cupcake / カップケーキ',
    },
    {
        emoji: '🍰',
        code: ':cake:',
        description: 'Shortcake / ショートケーキ',
    },
    {
        emoji: '🎂',
        code: ':birthday:',
        description: 'Birthday Cake / バースデーケーキ',
    },
    {
        emoji: '🍮',
        code: ':custard:',
        description: 'Custard / プリン',
    },
    {
        emoji: '🍭',
        code: ':lollipop:',
        description: 'Lollipop / アメ (飴)',
    },
    {
        emoji: '🍬',
        code: ':candy:',
        description: 'Candy / キャンディー',
    },
    {
        emoji: '🍫',
        code: ':chocolate_bar:',
        description: 'Chocolate Bar / チョコレート',
    },
    {
        emoji: '🍿',
        code: ':popcorn:',
        description: 'Popcorn / ポップコーン',
    },
    {
        emoji: '🍩',
        code: ':doughnut:',
        description: 'Doughnut / ドーナツ',
    },
    {
        emoji: '🍪',
        code: ':cookie:',
        description: 'Cookie / クッキー',
    },
    {
        emoji: '🌰',
        code: ':chestnut:',
        description: 'Chestnut / 栗',
    },
    {
        emoji: '🥜',
        code: ':peanuts:',
        description: 'Peanuts / 落花生 (ピーナッツ)',
    },
    {
        emoji: '🫘',
        code: ':beans:',
        description: 'Beans / 豆',
    },
    {
        code: ':honey_pot:',
        emoji: '🍯',
        description: 'Honey Pot / 蜂蜜 (はちみつ、ハチミツ)',
    },
    {
        emoji: '🥛',
        code: ':milk:',
        description: 'Glass of Milk / 牛乳',
    },
    {
        emoji: '☕',
        code: ':coffee:',
        description: 'Coffee / コーヒー (珈琲)',
    },
    {
        code: ':tea:',
        emoji: '🍵',
        description: 'Green Tea / お茶 (緑茶)',
    },
    {
        code: ':mate:',
        emoji: '🧉',
        description: 'Mate / マテ茶',
    },
    {
        code: ':bubble_tea:',
        emoji: '🧋',
        description: 'Bubble Tea / タピオカミルクティー',
    },
    {
        code: ':sake:',
        emoji: '🍶',
        description: 'Sake / 日本酒',
    },
    {
        emoji: '🍺',
        code: ':beer:',
        description: 'Beer / ビール',
    },
    {
        emoji: '🍻',
        code: ':beers:',
        description: 'Beers / ビール (乾杯)',
    },
    {
        emoji: '🥂',
        code: ':clinking_glasses:',
        description: 'Clinking Glasses / 乾杯',
    },
    {
        emoji: '🍷',
        code: ':wine_glass:',
        description: 'Wine / ワイン',
    },
    {
        code: ':tumbler_glass:',
        emoji: '🥃',
        description: 'Tumbler / ウイスキー',
    },
    {
        emoji: '🍸',
        code: ':cocktail:',
        description: 'Cocktail / カクテル',
    },
    {
        code: ':champagne:',
        emoji: '🍾',
        description: 'Champagne / シャンパン',
    },
    {
        emoji: '🍹',
        code: ':tropical_drink:',
        description: 'Tropical Drink / トロピカルドリンク',
    },
    {
        emoji: '🧂',
        code: ':salt:',
        description: 'Salt / 塩',
    },
];

export default Foodmoji;

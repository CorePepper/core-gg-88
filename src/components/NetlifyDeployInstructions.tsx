import React from "react";

const NetlifyDeployInstructions = () => {
  return (
    <div className="space-y-2">
      <p className="font-semibold">1. プロジェクトのフォルダを見つける</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>重要: Shareボタンの場所について</strong>
          <ul className="list-disc pl-4 mt-1">
            <li>画面右上の「Publish」ボタンの横にある「⋮」（三点リーダー）をクリック</li>
            <li>表示されるメニューから「Export」を選択</li>
            <li>ダウンロードしたZIPファイルを展開（解凍）する</li>
            <li>展開したフォルダが、あなたのプロジェクトのフォルダです</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">2. プログラムを開いてフォルダに移動</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Windowsの場合：スタートメニューから「コマンドプロンプト」を検索して開く</li>
        <li>Macの場合：Spotlightで「ターミナル」を検索して開く</li>
        <li>下のコマンドをコピーして貼り付け、プロジェクトのフォルダの場所に変更してください：
          <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
            cd プロジェクトのフォルダの場所
          </pre>
        </li>
        <li>例：
          <ul className="list-disc pl-4 mt-1">
            <li>Windowsの場合：cd C:\Users\あなたの名前\Downloads\プロジェクト名</li>
            <li>Macの場合：cd /Users/あなたの名前/Downloads/プロジェクト名</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">3. 必要なコマンドを順番に実行</p>
      <p className="text-sm text-gray-600 mt-1">
        以下のコマンドを1つずつコピーして貼り付け、Enterキーを押してください：
      </p>
      <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
        git init
        
        git remote add origin あなたのGitHubリポジトリのURL

        git add .

        git commit -m "最初のアップロード"

        git push origin main
      </pre>
      <p className="text-sm text-gray-600 mt-1">
        ※GitHubリポジトリのURLは、GitHubのプロジェクトページの緑色の「Code」ボタンをクリックすると表示されます
      </p>

      <p className="font-semibold mt-4">4. Netlifyで確認</p>
      <p className="text-sm text-gray-600 mt-1">
        上記の手順が完了したら、Netlifyの画面を更新（リロード）してください。
        ブランチ（main）が表示されるようになります。
      </p>

      <p className="font-semibold mt-4">5. 基本設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>チーム選択: "CORE" を選択</li>
        <li>サイト名: お好きな名前を入力
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>例: my-core-project （.netlify.app が自動的に追加されます）</li>
            <li>空欄の場合は自動生成されます</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">6. ビルド設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>ベースディレクトリ: 空欄のまま</li>
        <li>ビルドコマンド: 「npm run build」</li>
        <li>公開ディレクトリ: 「dist」</li>
      </ul>

      <p className="font-semibold mt-4">7. デプロイの開始</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>「Deploy site」をクリックしてデプロイを開始</li>
        <li>デプロイ状況はダッシュボードで確認できます</li>
      </ul>
    </div>
  );
};

export default NetlifyDeployInstructions;

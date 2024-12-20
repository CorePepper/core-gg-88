import React from "react";

const NetlifyDeployInstructions = () => {
  return (
    <div className="space-y-2 max-w-full overflow-x-hidden">
      <p className="font-semibold">1. プロジェクトのクローンとセットアップ</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>Step 1: GitHubリポジトリのクローン</strong>
          <div className="bg-gray-100 p-2 mt-1 rounded text-sm overflow-x-auto">
            <code>git clone https://github.com/CorePepper/core-gg.git</code>
          </div>
        </li>
        <li>
          <strong>Step 2: プロジェクトフォルダへ移動</strong>
          <div className="bg-gray-100 p-2 mt-1 rounded text-sm overflow-x-auto">
            <code>cd core-gg</code>
          </div>
        </li>
      </ul>

      <p className="font-semibold mt-4">2. 必要なコマンドを順番に実行</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>Git初期化とリモート設定：</strong>
          <div className="bg-gray-100 p-2 mt-1 rounded text-sm overflow-x-auto whitespace-pre-wrap break-all">
            <code>git init</code>
          </div>
        </li>
        <li>
          <strong>リモートリポジトリの追加：</strong>
          <div className="bg-gray-100 p-2 mt-1 rounded text-sm overflow-x-auto whitespace-pre-wrap break-all">
            <code>git remote add origin https://github.com/CorePepper/core-gg.git</code>
          </div>
        </li>
        <li>
          <strong>ファイルの追加：</strong>
          <div className="bg-gray-100 p-2 mt-1 rounded text-sm overflow-x-auto">
            <code>git add .</code>
          </div>
        </li>
        <li>
          <strong>コミット：</strong>
          <div className="bg-gray-100 p-2 mt-1 rounded text-sm overflow-x-auto">
            <code>git commit -m "最初のアップロード"</code>
          </div>
        </li>
        <li>
          <strong>プッシュ：</strong>
          <div className="bg-gray-100 p-2 mt-1 rounded text-sm overflow-x-auto">
            <code>git push origin main</code>
          </div>
        </li>
      </ul>

      <p className="font-semibold mt-4">3. Netlifyでの設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>チーム選択: "CORE" を選択</li>
        <li>サイト名: お好きな名前を入力
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>例: my-core-project （.netlify.app が自動的に追加されます）</li>
            <li>空欄の場合は自動生成されます</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">4. ビルド設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>ベースディレクトリ: 空欄のまま</li>
        <li>ビルドコマンド: npm run build</li>
        <li>公開ディレクトリ: dist</li>
      </ul>

      <p className="font-semibold mt-4">5. デプロイの開始</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>「Deploy site」をクリックしてデプロイを開始</li>
        <li>デプロイ状況はダッシュボードで確認できます</li>
      </ul>
    </div>
  );
};

export default NetlifyDeployInstructions;
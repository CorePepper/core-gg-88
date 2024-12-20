import React from "react";

const NetlifyDeployInstructions = () => {
  return (
    <div className="space-y-2">
      <p className="font-semibold">1. GitHubとの連携</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Netlifyダッシュボードで:
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>「Add new site」→「Import an existing project」を選択</li>
            <li>「Deploy with GitHub」をクリック</li>
            <li>GitHubアカウントと連携していない場合は認証を行います</li>
            <li>リポジトリを選択（検索バーで探すことができます）</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">2. 基本設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>チーム選択: "CORE" を選択</li>
        <li>サイト名: プロジェクトの一時的なURL名を入力
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>例: my-core-project （.netlify.app が自動的に追加されます）</li>
            <li>空欄の場合は自動生成されます</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">3. ビルド設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>デプロイするブランチ: 「main」を選択</li>
        <li>ベースディレクトリ: 空欄のまま</li>
        <li>ビルドコマンド: 「npm run build」</li>
        <li>公開ディレクトリ: 「dist」</li>
      </ul>

      <p className="font-semibold mt-4">4. デプロイの開始</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>「Deploy site」をクリックしてデプロイを開始</li>
        <li>デプロイ状況はダッシュボードで確認できます</li>
      </ul>

      <p className="font-semibold mt-4">5. カスタムドメインの設定（オプション）</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>デプロイ完了後:
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>サイトのダッシュボードで「Domain settings」を選択</li>
            <li>「Add custom domain」からドメインを設定</li>
          </ul>
        </li>
      </ul>
      
      <p className="mt-4">詳しくは<a href="https://docs.netlify.com/site-deploys/create-deploys/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Netlifyのドキュメント</a>をご覧ください</p>
    </div>
  );
};

export default NetlifyDeployInstructions;
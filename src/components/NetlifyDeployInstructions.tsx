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
            <li>リポジトリが表示されない場合は「Configure the Netlify app on GitHub」をクリックして権限を確認してください</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">2. リポジトリとブランチの選択</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>リポジトリの選択:
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>検索バーにリポジトリ名を入力して検索</li>
            <li>リストから対象のリポジトリを選択</li>
          </ul>
        </li>
        <li className="text-red-600">ブランチが表示されない場合の対処方法:
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>GitHubで新しいリポジトリを作成した直後の場合は、まずローカルでコミットを作成してプッシュする必要があります</li>
            <li>ローカルでのGit操作手順:
              <ol className="list-decimal pl-4 mt-1 space-y-2">
                <li>
                  <strong>Step 1: ターミナルを開く</strong>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Windowsの場合: コマンドプロンプトまたはPowerShell</li>
                    <li>MacやLinuxの場合: ターミナル</li>
                  </ul>
                </li>
                <li>
                  <strong>Step 2: プロジェクトフォルダに移動</strong>
                  <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
                    cd プロジェクトのパス
                  </pre>
                  <p className="text-sm text-gray-600 mt-1">例: cd C:\Users\ユーザー名\projects\my-project</p>
                </li>
                <li>
                  <strong>Step 3: Gitの初期化（新規リポジトリの場合のみ）</strong>
                  <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
                    git init
                  </pre>
                </li>
                <li>
                  <strong>Step 4: リモートリポジトリの追加（新規リポジトリの場合のみ）</strong>
                  <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
                    git remote add origin リポジトリのURL
                  </pre>
                  <p className="text-sm text-gray-600 mt-1">※リポジトリのURLはGitHubのリポジトリページで確認できます</p>
                </li>
                <li>
                  <strong>Step 5: 変更をステージングに追加</strong>
                  <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
                    git add .
                  </pre>
                  <p className="text-sm text-gray-600 mt-1">※全てのファイルを追加します</p>
                </li>
                <li>
                  <strong>Step 6: コミットの作成</strong>
                  <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
                    git commit -m "Initial commit"
                  </pre>
                  <p className="text-sm text-gray-600 mt-1">※"Initial commit"は任意のコミットメッセージに変更可能</p>
                </li>
                <li>
                  <strong>Step 7: リモートリポジトリへのプッシュ</strong>
                  <pre className="bg-gray-100 p-2 mt-1 rounded text-sm">
                    git push origin main
                  </pre>
                </li>
              </ol>
            </li>
            <li>プッシュ後、Netlifyの画面をリロードするとブランチが表示されるようになります</li>
          </ul>
        </li>
        <li>ブランチの選択:
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>通常は「main」または「master」ブランチを選択</li>
            <li>ブランチ名は新規リポジトリの場合、デフォルトで「main」になっています</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">3. 基本設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>チーム選択: "CORE" を選択</li>
        <li>サイト名: プロジェクトの一時的なURL名を入力
          <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
            <li>例: my-core-project （.netlify.app が自動的に追加されます）</li>
            <li>空欄の場合は自動生成されます</li>
          </ul>
        </li>
      </ul>

      <p className="font-semibold mt-4">4. ビルド設定</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>ベースディレクトリ: 空欄のまま</li>
        <li>ビルドコマンド: 「npm run build」</li>
        <li>公開ディレクトリ: 「dist」</li>
      </ul>

      <p className="font-semibold mt-4">5. デプロイの開始</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>「Deploy site」をクリックしてデプロイを開始</li>
        <li>デプロイ状況はダッシュボードで確認できます</li>
      </ul>

      <p className="font-semibold mt-4">6. カスタムドメインの設定（オプション）</p>
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
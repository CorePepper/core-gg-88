import React from "react";

const NetlifyDeployInstructions = () => {
  return (
    <div className="space-y-4 max-w-full overflow-x-hidden p-4">
      <h2 className="text-xl font-bold mb-4">Netlifyデプロイの手順書</h2>

      <div className="space-y-6">
        {/* セクション1: 準備 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">準備するもの</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>GitHubアカウント</li>
            <li>Netlifyアカウント</li>
            <li>ローカルPCにGitがインストールされていること</li>
          </ul>
        </div>

        {/* セクション2: GitHubでの作業 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Step 1: GitHubでの作業</h3>
          <div className="space-y-2">
            <p>1. GitHubにログインする</p>
            <p>2. 新しいリポジトリを作成する</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>リポジトリ名: 好きな名前（例：my-core-project）</li>
              <li>公開設定: Public</li>
              <li>その他の設定はデフォルトのまま</li>
            </ul>
          </div>
        </div>

        {/* セクション3: ローカルでの作業 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Step 2: ローカルPCでの作業</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">1. プロジェクトをダウンロード:</p>
              <div className="bg-gray-100 p-3 rounded">
                <code>git clone https://github.com/CorePepper/core-gg.git</code>
              </div>
            </div>
            
            <div>
              <p className="font-medium mb-2">2. フォルダに移動:</p>
              <div className="bg-gray-100 p-3 rounded">
                <code>cd core-gg</code>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">3. Gitの初期化と設定:</p>
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded">
                  <code>git init</code>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <code>git add .</code>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <code>git commit -m "初回コミット"</code>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <code>git branch -M main</code>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <code>git remote add origin [あなたのGitHubリポジトリのURL]</code>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <code>git push -u origin main</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セクション4: Netlifyでの作業 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Step 3: Netlifyでの作業</h3>
          <div className="space-y-2">
            <p>1. Netlifyにログインする</p>
            <p>2. 「Add new site」→「Import an existing project」を選択</p>
            <p>3. 「Deploy with GitHub」を選択</p>
            <p>4. 先ほど作成したGitHubリポジトリを選択</p>
            <p className="font-medium mt-4">5. デプロイ設定:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Team: "CORE" を選択</li>
              <li>Branch to deploy: main</li>
              <li>Base directory: 空欄のまま</li>
              <li>Build command: npm run build</li>
              <li>Publish directory: dist</li>
            </ul>
            <p>6. 「Deploy site」ボタンをクリック</p>
          </div>
        </div>

        {/* セクション5: 確認 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">デプロイ後の確認</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>デプロイが完了すると、自動的にURLが生成されます</li>
            <li>生成されたURLにアクセスして、サイトが正しく表示されることを確認してください</li>
            <li>エラーが発生した場合は、Netlifyのデプロイログを確認してください</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NetlifyDeployInstructions;
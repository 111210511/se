1. Fork (分叉專案)
Fork 是一個在 GitHub 網站上進行的動作，用來建立母專案的完整副本。

操作步驟：

開啟瀏覽器，前往母專案網址：[https://github.com/se-test-examples/git-examples](https://github.com/se-test-examples/git-examples)

點擊頁面右上角的「Fork」按鈕。

選擇將專案 Fork 到自己的 GitHub 帳號下（例如 ccckmit）。

系統會自動產生一個子專案，網址為：[https://github.com/ccckmit/git-examples](https://github.com/ccckmit/git-examples)

本地端環境準備指令：
在終端機輸入以下指令，將子專案下載到本地端電腦：

Bash
git clone https://github.com/ccckmit/git-examples.git
cd git-examples
2. 建立分支 (Branch)
在本地端開發新功能時，必須先建立並切換到新的開發分支，確保不會干擾 main 主分支的穩定狀態。

相關指令：

建立並切換至名為 developGitBranch 的分支：

Bash
git checkout -b developGitBranch
在此分支上進行檔案修改後，將變更加入暫存區並提交：

Bash
git add .
git commit -m "Add new features in developGitBranch"
將此分支推送到遠端的子專案 (ccckmit 的儲存庫)：

Bash
git push origin developGitBranch
3. 合併 (Merge)
當在 developGitBranch 分支上的開發與測試完成後，需要將這些變更合併回本地端的 main 主分支。

相關指令：

先切換回主分支：

Bash
git checkout main
將 developGitBranch 的變更合併到當前的 main 分支：

Bash
git merge developGitBranch
將合併後的 main 分支推送到遠端的子專案：

Bash
git push origin main
4. Pull Request (提取請求)
Pull Request 是透過 GitHub 介面發起的操作，目的是通知母專案的管理員來審查你所做的修改，並請求他們將你的程式碼合併到母專案中。

操作步驟：

前往你的子專案網址：[https://github.com/ccckmit/git-examples](https://github.com/ccckmit/git-examples)

在網頁上方，GitHub 通常會自動偵測到你剛推送的變更，並顯示「Compare & pull request」的提示按鈕；或者你可以點擊「Pull requests」標籤頁，再點擊「New pull request」。

設定比較的目標與來源分支：

Base repository (目標母專案)：se-test-examples/git-examples

Base branch (目標分支)：main

Head repository (來源子專案)：ccckmit/git-examples

Compare branch (來源分支)：選擇 developGitBranch (如果想要直接發送分支修改) 或 main (如果已在子專案合併完畢)。

填寫詳細的 Pull Request 標題與說明內容，解釋這次修改了哪些地方以及其目的。

點擊「Create pull request」按鈕，完成送出。

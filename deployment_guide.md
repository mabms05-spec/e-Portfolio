# Guide: Deploying your e-Portfolio to GitHub Pages

This guide outlines step-by-step how to publish your static portfolio website to **GitHub Pages** so it is live and shareable on the web.

---

## Prerequisites
1. A free account on [GitHub](https://github.com/).
2. **GitHub Desktop** installed on your computer (you already have a shortcut for this on your Desktop!).

---

## Step 1: Initialize your Repository in GitHub Desktop

1. Open **GitHub Desktop**.
2. Click on **File** (top left menu) -> **New Repository...** (or press `Ctrl + N`).
3. Fill in the Repository details:
   - **Name:** Choose a repository name (e.g., `portfolio` or `e-Portfolio`).
   - **Local Path:** Click **Choose...** and select your Desktop folder: `C:\Users\Ryo\Desktop\e-Portfolio`.
   - **Initialize this repository with a README:** Uncheck this (since you already have files).
   - **Git Ignore:** None.
   - **License:** None.
4. Click **Create Repository**.

---

## Step 2: Commit and Publish your Files

GitHub Desktop will scan your folder and automatically detect all the files you created (`index.html`, `brief.md`, `spec.md`, `mockup_prompts.md`, and the contents of the `assets/` folder).

1. In the bottom-left corner of GitHub Desktop, you will see a summary box:
   - In the **Summary (required)** field, type: `Initial commit: Completed website layout`.
   - Click the blue **Commit to main** (or **Commit to master**) button.
2. Once committed, look at the top menu bar in GitHub Desktop and click the **Publish repository** button.
3. In the popup window:
   - Keep the name as `e-Portfolio` or `portfolio`.
   - **Keep this code private:** **Uncheck** this box. *(Important: GitHub Pages requires the repository to be public to host it for free).*
   - Click **Publish Repository**.

---

## Step 3: Enable GitHub Pages on GitHub

Now that your files are uploaded to GitHub, you just need to turn on the hosting switch:

1. Click **View on GitHub** in GitHub Desktop, or log in to [GitHub.com](https://github.com/) and navigate to your newly published repository.
2. In the repository toolbar, click the **Settings** tab (it has a gear icon ⚙️).
3. In the left sidebar under the "Code and automation" section, click on **Pages**.
4. Under **Build and deployment**:
   - **Source:** Ensure it is set to **Deploy from a branch**.
   - **Branch:** Click the dropdown (currently saying *None*) and select **main** (or **master**).
   - Keep the folder selector as **/ (root)**.
   - Click **Save**.

---

## Step 4: Access your Live Website!

1. Wait about **1 to 2 minutes** for GitHub's servers to build and host your site.
2. Refresh the **Pages** settings page on GitHub.
3. You will see a banner at the top of that page showing your live URL:
   - **`https://your-github-username.github.io/portfolio/`**
4. Click the link to open your live engineering portfolio!

---

### 💡 Pro Tip for a Custom Root Domain
If you want the website to be accessible directly at `https://your-username.github.io` instead of having `/portfolio` at the end:
- In **Step 1**, name your repository exactly: `your-username.github.io` (replacing `your-username` with your actual GitHub username).
- Follow all other steps exactly the same.

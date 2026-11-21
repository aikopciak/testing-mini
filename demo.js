const examples = {
  prompt: {
    file: "codex-prompt.txt",
    title: "Give Codex a concrete task",
    example: "Add a dark mode toggle to this site.\nRemember the visitor’s choice and\nkeep the button keyboard accessible.",
    detail: "Start with the behavior you want and the checks that matter.",
  },
  review: {
    file: "pull-request.md",
    title: "Review the pull request on GitHub",
    example: "Add a theme toggle\n✓ Check keyboard navigation\n✓ Reload and verify the theme persists",
    detail: "Inspect the diff and confirm the checks before merging.",
  },
  publish: {
    file: "pages-settings.txt",
    title: "Publish with GitHub Pages",
    example: "Settings → Pages\nSource: Deploy from a branch\nBranch: default branch · Folder: / (root)",
    detail: "Once the deployment finishes, open the site URL shown in Pages settings.",
  },
};

document.querySelector(".steps").addEventListener("change", (event) => {
  const step = examples[event.target.value];
  document.querySelector("#file").textContent = step.file;
  document.querySelector("#step-title").textContent = step.title;
  document.querySelector("#example").textContent = step.example;
  document.querySelector("#detail").textContent = step.detail;
});

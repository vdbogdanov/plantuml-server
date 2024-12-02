/****************
* Theme Helpers *
*****************/

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function initTheme() {
  function changeEditorThemeSettingIfNecessary(theme) {
    if (theme === "dark" && document.appConfig.editorCreateOptions.theme === "vs") {
      document.appConfig.editorCreateOptions.theme = "vs-dark";
    }
    if (theme === "light" && document.appConfig.editorCreateOptions.theme === "vs-dark") {
      document.appConfig.editorCreateOptions.theme = "vs";
    }
  }
  // set theme to last saved settings or browser preference or "light"
  document.appConfig.theme = document.appConfig.theme || "light";
  setTheme(document.appConfig.theme);
  changeEditorThemeSettingIfNecessary(document.appConfig.theme);
}

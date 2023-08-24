const tabs = document.querySelectorAll(".info-box li a");
const panels = document.querySelectorAll(".info-box article");

for (let i = 0; i < tabs.length; i++) {
  setTabHandler(tabs[i], i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = () => {
    for (const tab of tabs) {
      tab.className = "";
    }

    tab.className = "active";

    for (const panel of panels) {
      panel.className = "";
    }

    panels[tabPos].className = "active-panel";
  };
}

function injectFocusPanel() {
  if (document.getElementById('ig-focus-panel')) return;

  // Create Side Panel DOM Structure
  const panel = document.createElement('div');
  panel.id = 'ig-focus-panel';
  panel.innerHTML = `
    <div class="ig-tab-header">
      <button class="ig-tab-btn active" data-tab="notes">📝 Notes</button>
      <button class="ig-tab-btn" data-tab="pdf">📄 PDF Reader</button>
      <button class="ig-tab-btn" data-tab="yt">▶️ YouTube</button>
    </div>

    <!-- Tab 1: Scratchpad Notes -->
    <div id="tab-notes" class="ig-tab-content active">
      <textarea id="ig-focus-notes" placeholder="Paste study notes, key formulas, or takeaways here (Auto-saves)..."></textarea>
    </div>

    <!-- Tab 2: Local PDF Viewer -->
    <div id="tab-pdf" class="ig-tab-content">
      <label class="file-upload-btn">
        📂 Upload PDF Note File
        <input type="file" id="ig-pdf-input" accept="application/pdf" style="display:none;">
      </label>
      <iframe id="ig-pdf-frame"></iframe>
    </div>

    <!-- Tab 3: YouTube Video Embed -->
    <div id="tab-yt" class="ig-tab-content">
      <div class="yt-input-group">
        <input type="text" id="ig-yt-url" placeholder="Paste YouTube link here...">
        <button id="ig-yt-load-btn">Load</button>
      </div>
      <iframe id="ig-yt-frame" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
  document.body.appendChild(panel);

  // Tab Switcher Logic
  const tabs = panel.querySelectorAll('.ig-tab-btn');
  const contents = panel.querySelectorAll('.ig-tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      contents.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');
      const targetTab = panel.querySelector(`#tab-${tab.dataset.tab}`);
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // Local PDF File Reader Logic
  const pdfInput = panel.querySelector('#ig-pdf-input');
  const pdfFrame = panel.querySelector('#ig-pdf-frame');
  pdfInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      pdfFrame.src = fileURL;
    }
  });

  // YouTube Link Converter & Embedder
  const ytInput = panel.querySelector('#ig-yt-url');
  const ytBtn = panel.querySelector('#ig-yt-load-btn');
  const ytFrame = panel.querySelector('#ig-yt-frame');

  function loadYouTubeVideo() {
    const url = ytInput.value.trim();
    let videoId = '';

    if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }

    if (videoId) {
      ytFrame.src = `https://www.youtube.com/embed/${videoId}`;
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ savedYtUrl: url });
      }
    }
  }

  ytBtn.addEventListener('click', loadYouTubeVideo);

  // Floating Toggle Button
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'ig-focus-toggle';
  toggleBtn.innerText = '📝 Focus Panel';
  toggleBtn.onclick = () => {
    panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
  };
  document.body.appendChild(toggleBtn);

  // Load Saved Notes & YouTube URL
  const textarea = panel.querySelector('#ig-focus-notes');
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['savedNotes', 'savedYtUrl'], (result) => {
      if (result.savedNotes) textarea.value = result.savedNotes;
      if (result.savedYtUrl) {
        ytInput.value = result.savedYtUrl;
        loadYouTubeVideo();
      }
    });

    textarea.addEventListener('input', () => {
      chrome.storage.local.set({ savedNotes: textarea.value });
    });
  }
}

function hideFeedDistractions() {
  if (!window.location.pathname.startsWith('/direct/')) {
    const mainFeed = document.querySelector('main[role="main"]');
    if (mainFeed && window.location.pathname === '/') {
      mainFeed.style.opacity = '0.05';
      mainFeed.style.pointerEvents = 'none';
    }
  }
}

// Initial Run & Observer
injectFocusPanel();
hideFeedDistractions();

const observer = new MutationObserver(() => {
  injectFocusPanel();
  hideFeedDistractions();
});
observer.observe(document.body, { childList: true, subtree: true });
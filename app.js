// Enable Tailwind Dark Mode
tailwind.config = { darkMode: 'class' };

function toggleTheme() {
    const html = document.getElementById('app-html');
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
}

// Inject the Sidebar & Load Theme
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check Theme
    if(localStorage.getItem('theme') === 'dark') {
        document.getElementById('app-html').classList.add('dark');
    }

    // 2. Inject Sidebar
    const sidebarRoot = document.getElementById('sidebar-root');
    if (sidebarRoot) {
        sidebarRoot.innerHTML = `
        <aside class="w-full md:w-72 bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 p-6 flex flex-col h-screen sticky top-0 shadow-sm">
            <div class="mb-10 text-2xl font-black tracking-tighter text-indigo-600">CO-LIVE</div>
            <nav class="flex-1 space-y-2 font-medium">
                <a href="index.html" class="block p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">??? Map Explorer</a>
                <a href="search.html" class="block p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">?? Search Rooms</a>
                <a href="messages.html" class="block p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">?? Messages <span class="ml-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">2</span></a>
                <a href="vibe-check.html" class="block p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">?? Vibe Check</a>
                <a href="host-dashboard.html" class="block p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 border-t dark:border-zinc-800 mt-4 pt-4">?? Host Dashboard</a>
            </nav>
            <div class="mt-auto space-y-2 border-t dark:border-zinc-800 pt-6">
                <a href="settings.html" class="block p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">?? Settings</a>
                <button onclick="toggleTheme()" class="w-full text-left p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">?? Toggle Theme</button>
            </div>
        </aside>
        `;
    }
});
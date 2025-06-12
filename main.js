// Dashboard Pro - Dynamic JavaScript Implementation
class DashboardPro {
    constructor() {
        this.initializeData();
        this.setupEventListeners();
        this.startRealTimeUpdates();
        this.initializeSettings();
    }

    initializeData() {
        // Analytics data
        this.analyticsData = {
            pageViews: 24567,
            previousPageViews: 22134,
            trend: 'up'
        };

        // Revenue data
        this.revenueData = {
            current: 12450,
            chartData: [
                { month: 'Jan', value: 8900 },
                { month: 'Feb', value: 12100 },
                { month: 'Mar', value: 9800 },
                { month: 'Apr', value: 14200 }
            ]
        };

        // Team performance data
        this.teamData = [
            { name: 'Sarah Chen', avatar: 'SC', progress: 75, color: 'from-[#102A43] to-[#00E5FF]' },
            { name: 'Mike Rodriguez', avatar: 'MR', progress: 68, color: 'from-[#00E5FF] to-[#102A43]' },
            { name: 'Emma Johnson', avatar: 'EJ', progress: 82, color: 'from-[#102A43] to-[#00E5FF]' },
            { name: 'David Kim', avatar: 'DK', progress: 59, color: 'from-[#00E5FF] to-[#102A43]' }
        ];

        // System status data
        this.systemStatus = {
            server: { status: 'online', uptime: '99.9%' },
            database: { status: 'online', uptime: '99.7%' },
            api: { status: 'warning', uptime: '98.2%' }
        };

        // Activity data
        this.activities = [
            { id: 1, text: 'New user registered', time: '2 minutes ago', type: 'user', color: '#00E5FF' },
            { id: 2, text: 'Report generated', time: '5 minutes ago', type: 'report', color: '#102A43' },
            { id: 3, text: 'Data backup completed', time: '12 minutes ago', type: 'system', color: '#00E5FF' },
            { id: 4, text: 'Payment processed', time: '18 minutes ago', type: 'payment', color: '#102A43' },
            { id: 5, text: 'Security scan completed', time: '25 minutes ago', type: 'security', color: '#00E5FF' }
        ];

        // Notification data
        this.notifications = [
            { id: 1, title: 'System Update', message: 'New features available', time: '1h ago', read: false },
            { id: 2, title: 'Performance Alert', message: 'CPU usage above 80%', time: '2h ago', read: false },
            { id: 3, title: 'Backup Complete', message: 'Daily backup successful', time: '3h ago', read: true }
        ];

        // Widget settings
        this.widgetSettings = {
            dataSource: 'Analytics API',
            refreshRate: 15,
            theme: 'default'
        };
    }

    setupEventListeners() {
        // Header button interactions
        this.setupHeaderButtons();
        
        // Widget interactions
        this.setupWidgetInteractions();
        
        // Settings panel
        this.setupSettingsPanel();
        
        // Install button
        this.setupInstallButton();
        
        // Layout presets
        this.setupLayoutPresets();
    }

    setupHeaderButtons() {
        // Notifications button
        const notificationBtn = document.querySelector('[data-id="ZFr-"]');
        if (notificationBtn) {
            notificationBtn.addEventListener('click', () => {
                this.showNotifications();
            });
        }

        // Settings button
        const settingsBtn = document.querySelector('[data-id="LKpJ"]');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                this.toggleSettingsPanel();
            });
        }

        // User avatars
        document.querySelectorAll('[data-id="M-wr"], [data-id="gJEI"]').forEach(avatar => {
            avatar.addEventListener('click', () => {
                this.showUserMenu();
            });
        });
    }

    setupWidgetInteractions() {
        // Make widgets draggable
        document.querySelectorAll('[data-id="aJOM"], [data-id="jkvG"], [data-id="3Xc9"], [data-id="PJdg"], [data-id="7hXQ"], [data-id="lGQc"]').forEach(widget => {
            this.makeWidgetDraggable(widget);
        });

        // Quick action buttons
        document.querySelectorAll('[data-id="yIEP"], [data-id="pj5S"], [data-id="VYM8"], [data-id="zNAp"]').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.handleQuickAction(index);
            });
        });
    }

    setupSettingsPanel() {
        const settingsPanel = document.querySelector('[data-id="zAtW"]');
        const closeBtn = document.querySelector('[data-id="4BOE"]');
        const applyBtn = document.querySelector('[data-id="6_vB"]');
        const dataSourceSelect = document.querySelector('[data-id="K5l5"]');
        const refreshRateSlider = document.querySelector('[data-id="Ml6V"]');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hideSettingsPanel();
            });
        }

        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                this.applySettings();
            });
        }

        if (dataSourceSelect) {
            dataSourceSelect.addEventListener('change', (e) => {
                this.widgetSettings.dataSource = e.target.value;
            });
        }

        if (refreshRateSlider) {
            refreshRateSlider.addEventListener('input', (e) => {
                this.widgetSettings.refreshRate = parseInt(e.target.value);
            });
        }

        // Theme selection
        document.querySelectorAll('[data-id="khxG"], [data-id="iv_s"], [data-id="8EY0"]').forEach((theme, index) => {
            theme.addEventListener('click', () => {
                this.selectTheme(index);
            });
        });
    }

    setupInstallButton() {
        const installBtn = document.querySelector('[data-id="OnvG"]');
        const learnMoreBtn = document.querySelector('[data-id="16CQ"]');

        if (installBtn) {
            installBtn.addEventListener('click', () => {
                this.initiateInstall();
            });
        }

        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => {
                this.showInstallInfo();
            });
        }
    }

    setupLayoutPresets() {
        const layoutBtn = document.querySelector('[data-id="-c6v"]');
        const saveBtn = document.querySelector('[data-id="ve9v"]');

        if (layoutBtn) {
            layoutBtn.addEventListener('click', () => {
                this.showLayoutPresets();
            });
        }

        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.saveCurrentLayout();
            });
        }
    }

    startRealTimeUpdates() {
        // Update analytics every 5 seconds
        setInterval(() => {
            this.updateAnalytics();
        }, 5000);

        // Update revenue chart every 30 seconds
        setInterval(() => {
            this.updateRevenueChart();
        }, 30000);

        // Update team performance every 10 seconds
        setInterval(() => {
            this.updateTeamPerformance();
        }, 10000);

        // Update system status every 15 seconds
        setInterval(() => {
            this.updateSystemStatus();
        }, 15000);

        // Add new activities every 20 seconds
        setInterval(() => {
            this.addNewActivity();
        }, 20000);

        // Update time stamps
        setInterval(() => {
            this.updateTimeStamps();
        }, 60000);
    }

    updateAnalytics() {
        const variation = Math.floor(Math.random() * 200) - 100;
        this.analyticsData.pageViews += variation;
        
        const analyticsElement = document.querySelector('[data-id="YFLf"]');
        if (analyticsElement) {
            analyticsElement.textContent = this.formatNumber(this.analyticsData.pageViews);
            
            // Add animation
            analyticsElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                analyticsElement.style.transform = 'scale(1)';
            }, 200);
        }
    }

    updateRevenueChart() {
        // Simulate new revenue data
        const newValue = Math.floor(Math.random() * 15000) + 8000;
        this.revenueData.current = newValue;

        // Update chart bars
        const bars = document.querySelectorAll('[data-id="H3QG"], [data-id="WfNe"], [data-id="7Rxx"], [data-id="5G2K"]');
        bars.forEach(bar => {
            const randomHeight = Math.floor(Math.random() * 20) + 16;
            bar.style.height = `${randomHeight * 4}px`;
        });

        // Update revenue text
        const revenueElement = document.querySelector('[data-id="V9gk"]');
        if (revenueElement) {
            revenueElement.textContent = `$${this.formatNumber(this.revenueData.current)} this quarter`;
        }
    }

    updateTeamPerformance() {
        this.teamData.forEach((member, index) => {
            const variation = Math.floor(Math.random() * 10) - 5;
            member.progress = Math.max(0, Math.min(100, member.progress + variation));
        });

        // Update progress bars
        const progressBars = document.querySelectorAll('[data-id="hATc"], [data-id="0GPL"]');
        progressBars.forEach((bar, index) => {
            if (this.teamData[index]) {
                bar.style.width = `${this.teamData[index].progress}%`;
            }
        });
    }

    updateSystemStatus() {
        const statuses = ['online', 'warning', 'offline'];
        const colors = { online: 'bg-green-400', warning: 'bg-yellow-400', offline: 'bg-red-400' };

        // Randomly update API status
        if (Math.random() < 0.3) {
            const newStatus = statuses[Math.floor(Math.random() * 2)]; // Only online or warning
            this.systemStatus.api.status = newStatus;

            const apiStatusElement = document.querySelector('[data-id="IIfe"]');
            if (apiStatusElement) {
                apiStatusElement.className = `w-3 h-3 rounded-full ${colors[newStatus]} animate-pulse`;
            }
        }
    }

    addNewActivity() {
        const newActivities = [
            'User profile updated',
            'New order received',
            'Email campaign sent',
            'Database optimized',
            'Security alert resolved',
            'File upload completed',
            'API request processed',
            'Cache cleared',
            'Notification sent',
            'Report scheduled'
        ];

        const newActivity = {
            id: Date.now(),
            text: newActivities[Math.floor(Math.random() * newActivities.length)],
            time: 'Just now',
            type: 'system',
            color: Math.random() > 0.5 ? '#00E5FF' : '#102A43'
        };

        this.activities.unshift(newActivity);
        this.activities = this.activities.slice(0, 5); // Keep only latest 5

        this.updateActivityDisplay();
    }

    updateActivityDisplay() {
        const activityContainer = document.querySelector('[data-id="tcSk"]');
        if (activityContainer) {
            activityContainer.innerHTML = this.activities.map(activity => `
                <div class="flex items-center space-x-3 opacity-0 animate-fade-in">
                    <div class="w-2 h-2 rounded-full" style="background-color: ${activity.color}"></div>
                    <span class="text-sm text-[#2E3A46]">${activity.text}</span>
                </div>
            `).join('');

            // Trigger animation
            setTimeout(() => {
                activityContainer.querySelectorAll('div').forEach(div => {
                    div.style.opacity = '1';
                });
            }, 100);
        }
    }

    makeWidgetDraggable(widget) {
        let isDragging = false;
        let startX, startY, initialX, initialY;

        widget.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialX = widget.offsetLeft;
            initialY = widget.offsetTop;
            widget.style.cursor = 'grabbing';
            widget.style.zIndex = '1000';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            widget.style.position = 'relative';
            widget.style.left = `${deltaX}px`;
            widget.style.top = `${deltaY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                widget.style.cursor = 'move';
                widget.style.zIndex = 'auto';
                
                // Snap back animation
                setTimeout(() => {
                    widget.style.transition = 'all 0.3s ease';
                    widget.style.left = '0px';
                    widget.style.top = '0px';
                    setTimeout(() => {
                        widget.style.transition = '';
                    }, 300);
                }, 100);
            }
        });
    }

    handleQuickAction(index) {
        const actions = ['Add Item', 'Edit Settings', 'Share Dashboard', 'Download Report'];
        this.showToast(`${actions[index]} clicked!`);
    }

    showNotifications() {
        const modal = this.createModal('Notifications', this.notifications.map(notif => `
            <div class="p-3 border-b border-gray-200 ${notif.read ? 'opacity-60' : ''}">
                <div class="font-medium">${notif.title}</div>
                <div class="text-sm text-gray-600">${notif.message}</div>
                <div class="text-xs text-gray-400">${notif.time}</div>
            </div>
        `).join(''));
    }

    toggleSettingsPanel() {
        const panel = document.querySelector('[data-id="zAtW"]');
        if (panel) {
            panel.classList.toggle('translate-x-0');
            panel.classList.toggle('translate-x-full');
        }
    }

    hideSettingsPanel() {
        const panel = document.querySelector('[data-id="zAtW"]');
        if (panel) {
            panel.classList.add('translate-x-full');
            panel.classList.remove('translate-x-0');
        }
    }

    applySettings() {
        this.showToast('Settings applied successfully!');
        this.hideSettingsPanel();
        
        // Apply refresh rate
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
        this.refreshInterval = setInterval(() => {
            this.updateAnalytics();
        }, this.widgetSettings.refreshRate * 1000);
    }

    selectTheme(index) {
        const themes = ['default', 'purple', 'green'];
        this.widgetSettings.theme = themes[index];
        
        // Update theme selection visual
        document.querySelectorAll('[data-id="khxG"], [data-id="iv_s"], [data-id="8EY0"]').forEach((theme, i) => {
            if (i === index) {
                theme.classList.add('ring-2');
            } else {
                theme.classList.remove('ring-2');
            }
        });
    }

    initiateInstall() {
        this.showToast('Installing Dashboard Pro...');
        
        // Simulate installation progress
        let progress = 0;
        const installModal = this.createModal('Installing Dashboard Pro', `
            <div class="text-center">
                <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div id="install-progress" class="bg-gradient-to-r from-[#102A43] to-[#00E5FF] h-2 rounded-full transition-all duration-500" style="width: 0%"></div>
                </div>
                <div id="install-text">Preparing installation...</div>
            </div>
        `);

        const progressBar = document.getElementById('install-progress');
        const progressText = document.getElementById('install-text');
        
        const installSteps = [
            'Downloading files...',
            'Extracting components...',
            'Installing dependencies...',
            'Configuring settings...',
            'Finalizing installation...',
            'Installation complete!'
        ];

        const installTimer = setInterval(() => {
            progress += 20;
            if (progressBar) progressBar.style.width = `${progress}%`;
            if (progressText) progressText.textContent = installSteps[Math.floor(progress / 20) - 1] || 'Installing...';
            
            if (progress >= 100) {
                clearInterval(installTimer);
                setTimeout(() => {
                    this.closeModal();
                    this.showToast('Dashboard Pro installed successfully!');
                }, 1000);
            }
        }, 800);
    }

    showInstallInfo() {
        this.createModal('About Dashboard Pro', `
            <div class="space-y-4">
                <div class="flex items-center space-x-3">
                    <span class="material-symbols-outlined text-[#00E5FF]">offline_bolt</span>
                    <div>
                        <div class="font-medium">Works Offline</div>
                        <div class="text-sm text-gray-600">Full functionality without internet</div>
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <span class="material-symbols-outlined text-[#00E5FF]">notifications</span>
                    <div>
                        <div class="font-medium">Push Notifications</div>
                        <div class="text-sm text-gray-600">Real-time alerts and updates</div>
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <span class="material-symbols-outlined text-[#00E5FF]">home</span>
                    <div>
                        <div class="font-medium">Home Screen Access</div>
                        <div class="text-sm text-gray-600">Quick access from your device</div>
                    </div>
                </div>
            </div>
        `);
    }

    showLayoutPresets() {
        const presets = ['Default', 'Analytics Focus', 'Executive View', 'Developer Mode'];
        this.createModal('Layout Presets', presets.map((preset, index) => `
            <button class="w-full p-3 text-left hover:bg-gray-100 rounded-lg transition-colors" onclick="dashboard.applyLayoutPreset(${index})">
                ${preset}
            </button>
        `).join(''));
    }

    applyLayoutPreset(index) {
        const presets = ['Default', 'Analytics Focus', 'Executive View', 'Developer Mode'];
        this.showToast(`Applied ${presets[index]} layout`);
        this.closeModal();
    }

    saveCurrentLayout() {
        this.showToast('Layout saved successfully!');
    }

    showUserMenu() {
        this.createModal('User Menu', `
            <div class="space-y-2">
                <button class="w-full p-3 text-left hover:bg-gray-100 rounded-lg">Profile Settings</button>
                <button class="w-full p-3 text-left hover:bg-gray-100 rounded-lg">Account Preferences</button>
                <button class="w-full p-3 text-left hover:bg-gray-100 rounded-lg">Help & Support</button>
                <button class="w-full p-3 text-left hover:bg-gray-100 rounded-lg text-red-600">Sign Out</button>
            </div>
        `);
    }

    createModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold">${title}</h3>
                    <button onclick="dashboard.closeModal()" class="text-gray-500 hover:text-gray-700">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div>${content}</div>
            </div>
        `;
        document.body.appendChild(modal);
        this.currentModal = modal;
        return modal;
    }

    closeModal() {
        if (this.currentModal) {
            this.currentModal.remove();
            this.currentModal = null;
        }
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-gradient-to-r from-[#102A43] to-[#00E5FF] text-white px-6 py-3 rounded-lg shadow-lg z-50 opacity-0 transition-opacity duration-300';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.style.opacity = '1', 100);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    updateTimeStamps() {
        this.activities.forEach(activity => {
            if (activity.time === 'Just now') {
                activity.time = '1 minute ago';
            } else if (activity.time.includes('minute')) {
                const minutes = parseInt(activity.time) + 1;
                activity.time = `${minutes} minutes ago`;
            }
        });
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    initializeSettings() {
        // Initialize settings panel values
        const dataSourceSelect = document.querySelector('[data-id="K5l5"]');
        const refreshRateSlider = document.querySelector('[data-id="Ml6V"]');
        
        if (dataSourceSelect) {
            dataSourceSelect.value = this.widgetSettings.dataSource;
        }
        
        if (refreshRateSlider) {
            refreshRateSlider.value = this.widgetSettings.refreshRate;
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new DashboardPro();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fade-in 0.5s ease-out;
    }
    
    .widget-hover {
        transition: all 0.3s ease;
    }
    
    .widget-hover:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
`;
document.head.appendChild(style);
//
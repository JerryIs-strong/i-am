const shareElement = document.getElementById("share");
let shareCounter = 0;
let animeDelay = 0.2;

document.addEventListener('DOMContentLoaded', () => {
    const settings = JSON.parse(sessionStorage.getItem('setting'));
    const { profile, SEO, links, display, alert } = settings;
    const { skills, favicon } = profile;
    const { github_icon, music } = display.share;
    const titleSettings = settings.display.title;
    initializeProfile(profile, music, display, SEO, settings.plugins, titleSettings, favicon);
    initializeLinks(links);
    initializeSkills(skills);
    initializeGithubIcon(github_icon, true);
    if (music.enabled && github_icon.enabled) {
        infiniteLoop();
    }
    if (alert.enabled) {
        const safeMessage = "You're browsing with https:// protocol, the connection is safe!";
        const unsafeMessage = "It seems that you are not browsing using the https:// protocol. Your connection may be not secure!"
        if (alert.https) {
            if (window.location.protocol === 'https:') {
                showSnackbar("Security Guard", safeMessage, true, 8000, "fa-solid", "fa-lock");
            } else {
                showSnackbar("Security Guard", unsafeMessage, true, 10000, "fa-solid", "fa-lock-open", "warn");
            }
        }
        initializeAlert(alert.data)
    } else {
        debug("彈幕通知已禁用", "info");
        document.getElementById('notification').remove();
    }
    if (!display.blur) {
        document.body.style.setProperty('--global-blur', 'blur(0)');
    }
});

function createLink(id, icon, target, url, linkName, description, onclick, isInBox = false) {
    const LinkBtnWrapper = document.createElement('a');

    Object.assign(LinkBtnWrapper, {
        id,
        target,
        title: linkName
    });

    if (url != false) {
        LinkBtnWrapper.href = url;
    }

    LinkBtnWrapper.style.animationDelay = `${animeDelay}s`;
    animeDelay += 0.1;

    if (onclick) {
        LinkBtnWrapper.onclick = (e) => {
            e.preventDefault();
            new Function(onclick)();
        };
    }

    if (isInBox){
        const LinkInfoTab = document.createElement('div');
        const LinkBtnIcon = document.createElement('i');
        const LinkBtnTitle = document.createElement('a');
        const LinkBtnDesc = document.createElement('a');
        
        LinkInfoTab.className = 'link-info-tab';
        LinkBtnWrapper.className = 'link-btn-box';
        LinkBtnIcon.className = `link-icon ${icon.fontawesome}`;
        LinkBtnTitle.innerText = linkName;
        LinkBtnTitle.className = 'link-title';
        LinkBtnDesc.innerText = description;
        LinkBtnDesc.className = 'link-desc';
        
        LinkInfoTab.appendChild(LinkBtnTitle);
        LinkInfoTab.appendChild(LinkBtnDesc);
        LinkBtnWrapper.appendChild(LinkBtnIcon);
        LinkBtnWrapper.appendChild(LinkInfoTab);
    }else{
        LinkBtnWrapper.className = `link-btn-box ${icon.fontawesome}`;
    }

    LinkBtnWrapper.setAttribute('l-name', linkName);
    return LinkBtnWrapper;
}

function createSkills(name, breath) {
    const skillBtn = document.createElement('i');
    const styleTemp = "fa-brands fa-";
    skillBtn.className = `${styleTemp}${name} skill-icon${breath ? ' skill-breath' : ''}`;
    return skillBtn;
}

function infiniteLoop() {
    setTimeout(() => {
        shareElement.scrollTop = shareCounter === 0 ? 100 : 0;
        shareCounter = shareCounter === 0 ? 1 : 0;
        infiniteLoop();
    }, 6500);
}

function greetUser(settings) {
    const currentHour = new Date().getHours();
    const greetings = {
        morning: settings.morning || "Good morning!",
        afternoon: settings.afternoon || "Good afternoon!",
        evening: settings.evening || "Good evening!",
        night: settings.night || "Good night!"
    };

    if (currentHour >= 6 && currentHour < 12) {
        return greetings.morning;
    } else if (currentHour >= 12 && currentHour < 18) {
        return greetings.afternoon;
    } else if (currentHour >= 18 && currentHour < 21) {
        return greetings.evening;
    } else {
        return greetings.night;
    }
}



function initializeProfile(profile, music, display, SEO, plugins_list, titleSettings, favicon) {
    const { icon } = profile;
    const { background, signature } = display;
    const { language, description, google_verification } = SEO;
    const { music_data: musicSetting } = music;
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const tagElement = document.getElementById('tagContent');
    const tagSetting = profile.tag_intro.self_tag;
    const tagName = profile.tag_intro.name;
    /* Basic HTML Elements */
    document.documentElement.lang = language || 'zh-TW';
    document.title = profile.website_name;
    document.getElementById('title').innerText = titleSettings.method === "greeting" ? greetUser(titleSettings.advanced_settings) : `HEY! ${profile.name}`;
    document.getElementById('description').innerText = profile.subtitle;
    /* Main: tag intro */
    if (profile.name) {
        const nameElement = document.getElementById('name');
        if (nameElement) {
            if (tagName === 'auto') {
                nameElement.innerText = `@${profile.name}`;
            } else {
                nameElement.remove();
            }
        }
    }

    if (tagSetting) {
        const tagElement = document.getElementById('tag');
        if (tagElement) {
            tagElement.innerText = tagSetting[Math.floor(Math.random() * tagSetting.length)];
        } else {
            tagElement.remove();
        }
    }
    /* Meta Tags */
    document.querySelector('meta[name="description"]')?.setAttribute('content', description || 'Powered by JerryIs-strong/Arona');
    document.querySelector('meta[name="google-site-verification"]')?.setAttribute('content', google_verification || '');
    if (favicon.default) {
        document.querySelector("link[rel='shortcut icon']").href = favicon.default;
        document.querySelector("link[rel='apple-touch-icon']").href = favicon.default;
    }
    /* Open Graph */
    // document.querySelector('meta[property="og:title"]').setAttribute('content', profile.website_name);
    // document.querySelector('meta[property="og:url"]').setAttribute('content', profile.url);
    // document.querySelector('meta[property="og:description"]').setAttribute('content', description);

    Signature(signature);
    Music(music, musicSetting);
    Background(background.url);
    Theme(darkMode, favicon.dark_mode);
    HolderIcon(icon, plugins_list);
}

function Signature({ enabled, content, auto_hide }) {
    const signElement = document.getElementById('sign');
    if (enabled) {
        signElement.innerText = content;
        if (auto_hide) {
            signElement.classList.add("auto-hide");
        } else {
            debug("個性簽名[auto-hide]已禁用", "info");
        }
    } else {
        signElement.remove();
        debug("個性簽名已禁用", "info");
    }
}

function Music(music, musicSetting) {
    const musicElement = document.getElementById('MusicName');
    if (music.enabled) {
        const musicNumber = Object.keys(musicSetting).length;
        const musicRandom = Math.floor(Math.random() * musicNumber) + 1;
        const musicKey = musicSetting[`music_${musicRandom}`];
        musicElement.innerText = musicKey.name;
        musicElement.href = musicKey.url;
        if (musicKey.album || musicKey.artist) {
            if (musicKey.album.length > 0) {
                var musicKeyName = `${musicKey.name} - ${musicKey.artist} • ${musicKey.album}`;
            } else {
                var musicKeyName = `${musicKey.name} - ${musicKey.artist}`;
            }
        }
        musicElement.innerText = musicKeyName;
        musicElement.title = musicKeyName;
        const currentMusic = {
            name: musicKey.name,
            artist: musicKey.artist
        }
        sessionStorage.setItem('current-music', JSON.stringify(currentMusic));
    } else {
        debug("音樂已禁用", "info")
        document.getElementById('music').remove();
    }
}

function Background(backgroundUrl) {
    const backgroundElement = document.getElementById('background');
    if (backgroundUrl.length > 0 && backgroundUrl.includes('/')) {
        backgroundElement.style.backgroundImage = `url(${backgroundUrl})`;
    } else {
        debug("本地壁紙設置錯誤", "warn");
    }
}

function Theme(darkMode, favicon) {
    document.documentElement.setAttribute("dark", darkMode ? "true" : "false");
    if (favicon.enabled != false) {
        if (!darkMode) {
            document.querySelector("link[rel='shortcut icon']").href = favicon.path.light;
            document.querySelector("link[rel='apple-touch-icon']").href = favicon.path.light;
        } else {
            document.querySelector("link[rel='shortcut icon']").href = favicon.path.dark;
            document.querySelector("link[rel='apple-touch-icon']").href = favicon.path.dark;
        }
    }
}

function HolderIcon(holderIcon) {
    const imgElement = document.getElementById('img');
    if (holderIcon.method === "local") {
        imgElement.style.backgroundImage = `url("${holderIcon.local.url}")`;
    } else if (holderIcon.method === "gravatar") {
        const gravatarUrl = `https://www.gravatar.com/avatar/${md5(holderIcon.gravatar.email)}?size=500`;
        imgElement.style.backgroundImage = `url("${gravatarUrl}")`;
    } else {
        debug("頭像設置錯誤", "warn");
    }
}

function initializeGithubIcon(github_icon, margin = false) {
    const githubProject = document.getElementById("github");
    
    if (github_icon.enabled) {
        if (margin) {
            githubProject.classList.add("github-loop");
        }
        if (github_icon.github_user_name != "" && github_icon.github_repo_name != "") {
            document.getElementById("githubProject").innerText = `${github_icon.github_user_name}/${github_icon.github_repo_name}`;
        }
    } else {
        debug("Github Icon已禁用", "info");
        document.getElementById("github").remove();
    }
}

function initializeSkills(skillSettings) {
    const languageSkills = skillSettings.language || {};
    const learningSkills = skillSettings.learning || {};
    const languageContainer = document.getElementById("language");
    const learningContainer = document.getElementById("learning");
    if (skillSettings.enabled) {
        if (skillSettings.language || skillSettings.learning) {
            Object.keys(languageSkills).forEach(key => {
                languageContainer.appendChild(createSkills(languageSkills[key], skillSettings.breath));
            });
            Object.keys(learningSkills).forEach(key => {
                learningContainer.appendChild(createSkills(learningSkills[key], skillSettings.breath));
            });
        } else {
            document.getElementById("skills").remove();
        }
    } else {
        debug("技能已禁用", "info");
        document.getElementById("skills").remove();
    }
}

function LinkBox(action) {
    const box = document.getElementById('mediaBtn_wrapper_box');
    const animation = action === "open" ? "box-in" : "box-out";
    box.style.display = action === "open" ? "flex" : "none";
    box.scrollTop = 0;
    box.style.animation = `${animation} 0.5s cubic-bezier(0.25, 0.04, 0, 0.89) forwards`;
}

function createContainer(header) {
    const container = document.createElement('div');
    container.className = "box_container";
    container.id = `${header}_category_container`;
    const headerElement = document.createElement('div');
    headerElement.className = "header";
    headerElement.id = `${header}_category_header`;
    headerElement.innerText = header;
    const btnWrapper = document.createElement('div');
    btnWrapper.className = "btn_wrapper";
    btnWrapper.id = `${header}_category_btn_wrapper`;
    container.appendChild(headerElement);
    container.appendChild(btnWrapper);
    return container;
}

function initializeLinks(linkSettings) {
    const urlParams = new URLSearchParams(window.location.search);
    const linkGroup = document.getElementById('mediaBtn_wrapper');
    const linkGroupMore = document.getElementById('mediaBtn_wrapper_box');
    let linkNum = 0;
    let InvalidLink = [];

    if (linkSettings && Object.keys(linkSettings).length > 0) {
        Object.entries(linkSettings).forEach(([category, linkDB]) => {
            if (!category.includes('link')) {
                linkGroupMore.appendChild(createContainer(category));
            } else {
                InvalidLink.push(linkDB);
            }
            Object.entries(linkDB).forEach(([key, link]) => {
                if (link.enabled && link.name != urlParams.get('media') && key.includes("link_")) {
                    if (linkNum < 2) {
                        linkGroup.appendChild(createLink(key, link.icon, link.target, link.url, link.name, link.description));
                    } else {
                        document.getElementById(`${category}_category_btn_wrapper`).appendChild(createLink(key, link.icon, link.target, link.url, link.name, link.description, false, true));
                    }
                    linkNum++;
                }
            });
        });

        if (InvalidLink.length > 0) {
            linkGroupMore.appendChild(createContainer("more"));
            Object.entries(InvalidLink).forEach(([key, link]) => {
                if (link.enabled && link.name !== urlParams.get('media')) {
                    if (linkNum < 2) {
                        linkGroup.appendChild(createLink(key, link.icon, link.target, link.url, link.name, link.description));
                    } else {
                        document.getElementById(`more_category_btn_wrapper`).appendChild(createLink(key, link.icon, link.target, link.url, link.name, link.description, false, true));
                    }
                    linkNum++;
                }
            });
        }

        if (linkNum >= 4) {
            const moreButtonIcon = JSON.stringify({
                type: "fontawesome",
                fontawesome: "fa-solid fa-circle-chevron-down",
                image: false
            });
            const closeButtonIcon = JSON.stringify({
                type: "fontawesome",
                fontawesome: "fa-solid fa-xmark",
                image: false
            });
            const moreButton = createLink("more", JSON.parse(moreButtonIcon), "_blank", false, "more", false, "LinkBox('open')");
            const closeButton = createLink("close", JSON.parse(closeButtonIcon), "_blank", false, "close", false, "LinkBox('close')");

            moreButton.style.animationDelay = (parseFloat(moreButton.style.animationDelay) - ((linkNum - 3) * 0.1)).toFixed(2) + 's';
            linkGroup.appendChild(moreButton);
            linkGroupMore.appendChild(closeButton);
        }
    } else {
        console.warn("連結設置錯誤");
        linkGroup.remove();
    }
}

function initializeAlert(alertSettings) {
    if (alertSettings && Object.keys(alertSettings).length > 0) {
        Object.keys(alertSettings).forEach(key => {
            const message = alertSettings[key];
            showSnackbar("Site Messenger", message.content, message.scroll, message.duration, message.iconType, message.iconName, message.level);
        });
    }
}
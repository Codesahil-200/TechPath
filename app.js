const rolesData = [
    {
        id: "frontend-dev",
        title: "Frontend Developer",
        category: "Development",
        salary: "$70k - $140k",
        description: "Architects of the web's user interface. They blend design and logic to create responsive, interactive, and fast web applications.",
        skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React / Vue / Angular", "Tailwind CSS", "Git & GitHub", "Web Accessibility"],
        roadmap: [
            { step: "Learn the Basics", content: "Master HTML Structure, CSS Box Model, and layout techniques (Flexbox, Grid)." },
            { step: "Master JavaScript", content: "Understand DOM manipulation, variables, functions, ES6+ syntax, and async programming." },
            { step: "Pick a Framework", content: "Deep dive into React, Vue, or Angular. Learn components, state management, and hooks." },
            { step: "Build Projects", content: "Create a portfolio with real-world apps (e-commerce, dashboard, social media clone)." }
        ],
        resources: ["MDN Web Docs", "freeCodeCamp", "Frontend Masters", "CSS-Tricks"]
    },
    {
        id: "backend-dev",
        title: "Backend Developer",
        category: "Development",
        salary: "$80k - $150k",
        description: "The engine builders. They manage servers, databases, and application logic, ensuring data flows correctly and securely.",
        skills: ["Node.js / Python / Java", "SQL & NoSQL Databases", "API Design (REST/GraphQL)", "Authentication", "Docker & CI/CD"],
        roadmap: [
            { step: "Learn a Server Language", content: "Pick one: Node.js (JS), Python (Django/Flask), or Java (Spring)." },
            { step: "Database Mastery", content: "Learn Relational (PostgreSQL, MySQL) and Non-Relational (MongoDB) databases." },
            { step: "API Development", content: "Build RESTful APIs to serve data to frontend applications. Understand HTTP methods." },
            { step: "Deploy & Scale", content: "Learn cloud basics (AWS/Vercel), containerization (Docker), and security best practices." }
        ],
        resources: ["roadmap.sh/backend", "Full Stack Open", "Node.js Schema", "System Design Primer"]
    },
    {
        id: "ui-ux-designer",
        title: "UI/UX Designer",
        category: "Design",
        salary: "$75k - $135k",
        description: "The bridge between human needs and digital products. They design intuitive user flows (UX) and beautiful interfaces (UI).",
        skills: ["Figma / Adobe XD", "User Research", "Wireframing & Prototyping", "Interaction Design", "Color Theory"],
        roadmap: [
            { step: "Design Fundamentals", content: "Study typography, color theory, layout, and visual hierarchy." },
            { step: "Learn the Tools", content: "Master Figma for designing interfaces and prototyping interactions." },
            { step: "UX Research", content: "Learn how to conduct user interviews, create personas, and map user journeys." },
            { step: "Build a Portfolio", content: "Redesign existing apps or solve a problem with a new product design case study." }
        ],
        resources: ["Refactoring UI", "Nielsen Norman Group", "Dribbble", "Laws of UX"]
    },
    {
        id: "devops-engineer",
        title: "DevOps Engineer",
        category: "Infrastructure",
        salary: "$90k - $160k",
        description: "The automators. They streamline the development process, managing cloud infrastructure, CI/CD pipelines, and reliability.",
        skills: ["Linux & Bash Scripting", "AWS / Azure / GCP", "Docker & Kubernetes", "CI/CD", "Terraform"],
        roadmap: [
            { step: "OS Concepts", content: "Deep understanding of Linux, command line, and process management." },
            { step: "Networking & Security", content: "Learn DNS, HTTP/S, Firewalls, and basic cybersecurity principles." },
            { step: "Containerization", content: "Master Docker for packaging apps and Kubernetes for orchestration." },
            { step: "Cloud & Automation", content: "Learn a major cloud provider and automate deployments with CI/CD tools." }
        ],
        resources: ["DevOps Roadmap", "AWS Training", "Kubernetes Docs", "HashiCorp Learn"]
    },
    {
        id: "data-scientist",
        title: "Data Scientist",
        category: "Data",
        salary: "$95k - $165k",
        description: "The modern oracle. They analyze complex data sets to extract insights, build machine learning models, and aid decisions.",
        skills: ["Python / R", "Pandas & NumPy", "Machine Learning", "Data Visualization", "SQL & Big Data"],
        roadmap: [
            { step: "Math & Stats", content: "Review probability, statistics, and linear algebra fundamentals." },
            { step: "Python for Data", content: "Learn Python syntax and libraries like Pandas for data manipulation." },
            { step: "Machine Learning", content: "Understand algorithms: Regression, Classification, Clustering, and Neural Networks." },
            { step: "Real World Projects", content: "Analyze a dataset (e.g., from Kaggle) and present your findings visually." }
        ],
        resources: ["Kaggle", "Coursera (Andrew Ng)", "Towards Data Science", "DataCamp"]
    },
    {
        id: "cyber-security",
        title: "Cybersecurity Analyst",
        category: "Security",
        salary: "$85k - $145k",
        description: "The digital guardians. They protect computer systems, networks, and data from security breaches and cyber attacks.",
        skills: ["Network Security", "Ethical Hacking", "SIEM Tools", "Risk Assessment", "Firewalls", "Cryptography"],
        roadmap: [
            { step: "Networking Basics", content: "Understand TCP/IP, OSI Model, IP addressing, and common protocols." },
            { step: "Security Fundamentals", content: "Learn the CIA Triad (Confidentiality, Integrity, Availability) and threat landscapes." },
            { step: "Tools of the Trade", content: "Learn to use Wireshark, Nmap, Metasploit, and SIEM platforms." },
            { step: "Certification", content: "Prepare for CompTIA Security+ or CEH to validate your skills." }
        ],
        resources: ["Hack The Box", "TryHackMe", "OWASP", "Cybrary"]
    },
    {
        id: "mobile-dev",
        title: "Mobile Developer",
        category: "Development",
        salary: "$80k - $145k",
        description: "Creators of apps. They build native or cross-platform applications for iOS and Android devices.",
        skills: ["Swift (iOS) / Kotlin (Android)", "React Native / Flutter", "Mobile UI Design", "API Integration", "App Store Publishing"],
        roadmap: [
            { step: "Pick a Platform", content: "Decide between iOS (Swift), Android (Kotlin), or Cross-Platform (Flutter/React Native)." },
            { step: "Learn Capabilities", content: "Understand mobile hardware access: Camera, GPS, Sensors, and Push Notifications." },
            { step: "State Management", content: "Learn how to manage app state and data persistence on a mobile device." },
            { step: "Publishing", content: "Learn the process of building, signing, and releasing apps to the App Store/Play Store." }
        ],
        resources: ["Ray Wenderlich", "Android Developers", "Apple Developer Docs", "Flutter Docs"]
    },
    {
        id: "qa-engineer",
        title: "QA Engineer",
        category: "Development",
        salary: "$65k - $115k",
        description: "The quality guardians. They design and execute tests to identify bugs, ensuring software meets quality standards.",
        skills: ["Manual Testing", "Automation (Selenium/Cypress)", "API Testing", "Jira / Bug Tracking", "Programming Basics"],
        roadmap: [
            { step: "Testing Fundamentals", content: "Understand SDLC, STLC, and difference between manual vs. automated testing." },
            { step: "Manual Testing", content: "Learn to write test cases, execute them, and report bugs effectively." },
            { step: "Automation", content: "Learn a language (Python/Java/JS) and an automation framework (Selenium/Cypress)." },
            { step: "API & CI/CD", content: "Learn to test APIs (Postman) and integrate tests into deployment pipelines." }
        ],
        resources: ["Ministry of Testing", "TestAutomationUniversity", "Guru99", "Selenium Docs"]
    },
    {
        id: "product-manager",
        title: "Product Manager",
        category: "Management",
        salary: "$100k - $180k",
        description: "The visionaries. They define product strategy, prioritize features, and collaborate with dev/design teams to launch products.",
        skills: ["Agile/Scrum", "User Story Mapping", "Data Analysis", "Stakeholder Management", "UX Basics"],
        roadmap: [
            { step: "Understand the Lifecycle", content: "Learn the product development lifecycle from ideation to launch." },
            { step: "Agile Methodologies", content: "Master Scrum, Kanban, and how to manage backlogs effectively." },
            { step: "Metrics & Data", content: "Learn to track KPIs, OKRs, and use data to make product decisions." },
            { step: "Communication", content: "Develop soft skills to lead without authority and negotiate with stakeholders." }
        ],
        resources: ["Mind the Product", "Silicon Valley PG", "Lenny's Newsletter", "Product School"]
    },
    {
        id: "cloud-architect",
        title: "Cloud Architect",
        category: "Infrastructure",
        salary: "$120k - $200k",
        description: "The structural engineers of the cloud. They design complex cloud environments ensuring scalability, reliability, and cost-efficiency.",
        skills: ["AWS / Azure / GCP Solution Architect", "System Design", "Networking", "Security Compliance", "Cost Optimization"],
        roadmap: [
            { step: "Deep Cloud Knowledge", content: "Obtain professional-level certifications for at least one major cloud provider." },
            { step: "System Design", content: "Master concepts like load balancing, caching, sharding, and disaster recovery." },
            { step: "Hybrid/Multi-Cloud", content: "Understand how to integrate on-premise systems with cloud or use multiple providers." },
            { step: "Governance", content: "Learn to design policies for security, compliance, and cost management at scale." }
        ],
        resources: ["AWS Architecture Center", "Azure Architecture Center", "Cloud Patterns", "InfoQ"]
    }
];

// ==============================================================================
// 1. GETTING HTML ELEMENTS TO CONTROL
// ==============================================================================
// Here we grab elements from our index.html file so we can change them later.
const rolesGrid = document.getElementById('roles-grid');
const searchInput = document.getElementById('search-input');
const categoryButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('no-results');
const modal = document.getElementById('role-modal');
const closeModal = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');

// Registration Elements
const regModal = document.getElementById('registration-modal');
const regForm = document.getElementById('registration-form');
const regOverlay = document.getElementById('reg-modal-overlay');

// ==============================================================================
// 2. DATABASE INITIALIZATION (IndexedDB)
// ==============================================================================
// We use IndexedDB as a local database that stores data safely in the browser.
let db;
const dbRequest = indexedDB.open("TechPathDB", 1);

dbRequest.onupgradeneeded = function (event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("user_leads")) {
        db.createObjectStore("user_leads", { keyPath: "id", autoIncrement: true });
    }
};

dbRequest.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database initialized successfully");
};

dbRequest.onerror = function (event) {
    console.error("Database error: " + event.target.errorCode);
};

// Function to save user to the database
function saveToDatabase(userData) {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject("Database not initialized");
            return;
        }
        const transaction = db.transaction(["user_leads"], "readwrite");
        const store = transaction.objectStore("user_leads");
        const request = store.add(userData);

        request.onsuccess = () => resolve(true);
        request.onerror = () => reject(request.error);
    });
}
// -------------------------------------------

// ==============================================================================
// 3. USER TRACKING
// ==============================================================================
let isRegistered = false; // Always ask for information when clicking a field
let pendingRole = null; // Remembers which role the user clicked before they registered

// ==============================================================================
// 4. DISPLAYING CARDS ON THE SCREEN
// ==============================================================================
// This function takes a list of roles and creates the HTML cards dynamically.
function renderRoles(roles) {
    rolesGrid.innerHTML = '';

    if (roles.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    roles.forEach(role => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl p-6 relative group overflow-hidden cursor-pointer';
        card.onclick = () => openModal(role);

        // Category Badge Color
        let badgeColor = 'bg-slate-700 text-slate-300';
        if (role.category === 'Development') badgeColor = 'bg-blue-500/20 text-blue-300 border border-blue-500/20';
        if (role.category === 'Design') badgeColor = 'bg-pink-500/20 text-pink-300 border border-pink-500/20';
        if (role.category === 'Data') badgeColor = 'bg-purple-500/20 text-purple-300 border border-purple-500/20';
        if (role.category === 'Infrastructure') badgeColor = 'bg-orange-500/20 text-orange-300 border border-orange-500/20';
        if (role.category === 'Security') badgeColor = 'bg-red-500/20 text-red-300 border border-red-500/20';
        if (role.category === 'Management') badgeColor = 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/20';

        card.innerHTML = `
            <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>
            </div>
            
            <div class="flex items-start justify-between mb-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColor}">
                    ${role.category}
                </span>
            </div>
            
            <h3 class="text-xl font-heading font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">${role.title}</h3>
            <p class="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                ${role.description}
            </p>
            
            <div class="flex items-center justify-between mt-auto">
                <span class="text-xs font-semibold text-slate-500 tracking-wider uppercase">Avg: ${role.salary}</span>
                <span class="inline-flex items-center text-sm font-medium text-indigo-400 group-hover:translate-x-1 transition-transform">
                    View Path 
                    <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        `;
        rolesGrid.appendChild(card);
    });
}

// ==============================================================================
// 5. FILTERING AND SEARCHING
// ==============================================================================
// These variables remember the currently selected category button and search text.
let currentCategory = 'All';
let currentSearch = '';

// Check each role to see if it matches both the Search Bar AND the Category Button
function filterRoles() {
    const filtered = rolesData.filter(role => {
        const matchesCategory = currentCategory === 'All' || role.category === currentCategory;
        const matchesSearch = role.title.toLowerCase().includes(currentSearch) ||
            role.description.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });
    renderRoles(filtered);
}

// Event Listeners
categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update active state
        const activeBtn = document.querySelector('.filter-btn.active');
        if (activeBtn) {
            activeBtn.classList.remove('active', 'bg-indigo-500/20', 'text-indigo-300', 'border-indigo-500/30', 'shadow-lg', 'shadow-indigo-500/20');
            activeBtn.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-white/5', 'bg-slate-800/30', 'border-slate-700/50');
        }

        const targetBtn = e.target; // or e.currentTarget if there were children
        targetBtn.classList.add('active', 'bg-indigo-500/20', 'text-indigo-300', 'border-indigo-500/30', 'shadow-lg', 'shadow-indigo-500/20');
        targetBtn.classList.remove('text-slate-400', 'hover:text-white', 'hover:bg-white/5', 'bg-slate-800/30', 'border-slate-700/50');

        currentCategory = targetBtn.dataset.category;
        filterRoles();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    filterRoles();
});

// Quiz Logic
const quizQuestions = [
    {
        question: "What interests you the most?",
        options: [
            { text: "Building visual interfaces & user interactions", score: { "frontend-dev": 2, "ui-ux-designer": 2, "mobile-dev": 1 } },
            { text: "Logic, data, and systems behind the scenes", score: { "backend-dev": 2, "data-scientist": 2, "devops-engineer": 1 } },
            { text: "Strategy, communication, and big picture", score: { "product-manager": 2, "qa-engineer": 1 } }
        ]
    },
    {
        question: "How do you prefer to work?",
        options: [
            { text: "Creatively, focusing on aesthetics", score: { "ui-ux-designer": 3, "frontend-dev": 1 } },
            { text: "Solving complex logical puzzles", score: { "backend-dev": 2, "cyber-security": 2, "data-scientist": 1 } },
            { text: "Ensuring stability and efficiency", score: { "devops-engineer": 3, "cloud-architect": 2, "qa-engineer": 2 } }
        ]
    },
    {
        question: "Which topic sounds coolest?",
        options: [
            { text: "Hacking and defending systems", score: { "cyber-security": 3, "devops-engineer": 1 } },
            { text: "Artificial Intelligence & Machine Learning", score: { "data-scientist": 3, "backend-dev": 1 } },
            { text: "Building massive global infrastructure", score: { "cloud-architect": 3, "devops-engineer": 2 } }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = {};

function startQuiz() {
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    currentQuestionIndex = 0;
    scores = {};
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const question = quizQuestions[currentQuestionIndex];

    container.innerHTML = `
        <h3 class="text-xl font-bold text-white mb-6">Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</h3>
        <p class="text-lg text-slate-300 mb-6">${question.question}</p>
        <div class="space-y-3">
            ${question.options.map((opt, idx) => `
                <button onclick="handleAnswer(${idx})" class="w-full text-left p-4 rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors border border-slate-700 hover:border-indigo-500 text-slate-200 hover:text-white">
                    ${opt.text}
                </button>
            `).join('')}
        </div>
    `;
}

function handleAnswer(optionIndex) {
    const option = quizQuestions[currentQuestionIndex].options[optionIndex];

    // Update scores
    for (const [role, points] of Object.entries(option.score)) {
        scores[role] = (scores[role] || 0) + points;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.classList.remove('hidden');

    // Sort scores
    const topRoles = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(([id]) => rolesData.find(r => r.id === id))
        .filter(Boolean);

    resultDiv.innerHTML = `
        <div class="text-center">
            <div class="mb-6 inline-flex p-3 rounded-full bg-green-500/20 text-green-400">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">We found a match!</h3>
            <p class="text-slate-400 mb-8">Based on your answers, you might enjoy these roles:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${topRoles.map(role => `
                    <div class="bg-slate-800 p-4 rounded-xl border border-slate-700 text-left cursor-pointer hover:border-indigo-500 transition-colors" onclick="openModalById('${role.id}')">
                        <h4 class="font-bold text-white mb-1">${role.title}</h4>
                        <p class="text-xs text-slate-400 line-clamp-2">${role.description}</p>
                    </div>
                `).join('')}
            </div>
            
            <button onclick="resetQuiz()" class="mt-8 text-sm text-slate-500 hover:text-white underline">Retake Quiz</button>
        </div>
    `;
}

function resetQuiz() {
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-start').classList.remove('hidden');
}

function openModalById(id) {
    const role = rolesData.find(r => r.id === id);
    if (role) openModal(role);
}


// Modal Functions
function openModal(role) {
    if (!isRegistered) {
        pendingRole = role;
        openRegistrationModal();
        return;
    }

    document.getElementById('modal-title').innerText = role.title;
    document.getElementById('modal-category').innerText = role.category;
    document.getElementById('modal-salary').innerText = role.salary;
    document.getElementById('modal-description').innerText = role.description;

    // Skills
    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = '';
    role.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50';
        span.innerText = skill;
        skillsContainer.appendChild(span);
    });

    // Roadmap
    const roadmapContainer = document.getElementById('modal-roadmap');
    roadmapContainer.innerHTML = '';
    // Draw the vertical line
    const line = document.createElement('div');
    line.className = 'absolute left-[19px] top-4 bottom-0 w-0.5 bg-indigo-500/20 z-0';
    roadmapContainer.appendChild(line);

    role.roadmap.forEach((step, index) => {
        const item = document.createElement('div');
        item.className = 'relative z-10';
        item.innerHTML = `
            <span class="absolute -left-[30px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border-2 border-indigo-500 text-xs font-bold text-indigo-400">
                ${index + 1}
            </span>
            <div class="ml-4">
                <h4 class="text-md font-bold text-white">${step.step}</h4>
                <p class="text-sm text-slate-400 mt-1">${step.content}</p>
            </div>
        `;
        roadmapContainer.appendChild(item);
    });

    // Resources (New)
    const resourcesContainer = document.getElementById('modal-resources');
    resourcesContainer.innerHTML = '';
    if (role.resources) {
        role.resources.forEach(res => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2 text-slate-300";
            li.innerHTML = `<span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>${res}`;
            resourcesContainer.appendChild(li);
        });
    }

    modal.classList.remove('hidden');

    // Simple Pop-In Animation
    modal.querySelector('#modal-content').classList.remove('scale-95', 'opacity-0');
    modal.querySelector('#modal-content').classList.add('scale-100', 'opacity-100');
}

// -------------------------------------------------------------
// HOW TO CLOSE THE POP-UP BOX
// -------------------------------------------------------------

function closeModalFunc() {
    modal.classList.add('hidden');
    // Require user to enter details again next time they click a field
    isRegistered = false;
}

closeModal.addEventListener('click', closeModalFunc);
modalOverlay.addEventListener('click', closeModalFunc);

// ==============================================================================
// 7. REGISTRATION SYSTEM LOGIC
// ==============================================================================
// This manages the strict form popup that forces users to enter their details.
function openRegistrationModal() {
    regModal.classList.remove('hidden');

    // Set Field of Interest if pending role exists
    const interestInput = document.getElementById('reg-interest');
    if (interestInput && pendingRole) {
        interestInput.value = pendingRole.title;
    } else if (interestInput) {
        interestInput.value = 'General Interest';
    }

    setTimeout(() => {
        document.getElementById('reg-modal-content').classList.remove('scale-95', 'opacity-0');
        document.getElementById('reg-modal-content').classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeRegistrationModal() {
    document.getElementById('reg-modal-content').classList.replace('scale-100', 'opacity-100', 'scale-95');
    document.getElementById('reg-modal-content').classList.add('opacity-0');
    setTimeout(() => {
        regModal.classList.add('hidden');
    }, 300);
}

regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('reg-submit');
    const originalBtnText = submitBtn.innerHTML;

    // Loading State
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Saving Details...</span>
    `;

    const userData = {
        name: document.getElementById('reg-name').value,
        email: document.getElementById('reg-email').value,
        age: document.getElementById('reg-age').value,
        phone: document.getElementById('reg-phone').value,
        gender: document.getElementById('reg-gender').value,
        interest: document.getElementById('reg-interest').value,
        background: document.getElementById('reg-background').value,
        course: document.getElementById('reg-course').value,
        timestamp: new Date().toISOString()
    };

    try {
        // 1. Save to Database (IndexedDB)
        await saveToDatabase(userData);
        console.log("Data saved successfully to IndexedDB");

        // 2. We skip localStorage so the system continues to ask for info on next click
        isRegistered = true;

        // 3. Success Feedback
        submitBtn.innerHTML = `
            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Success!</span>
        `;
        submitBtn.classList.replace('bg-indigo-600', 'bg-green-500');

        setTimeout(() => {
            closeRegistrationModal();
            if (pendingRole) {
                setTimeout(() => {
                    openModal(pendingRole);
                    pendingRole = null;
                }, 400);
            }
            // Reset the form so it's fresh for the next click
            regForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            submitBtn.classList.replace('bg-green-500', 'bg-indigo-600');
        }, 800);

    } catch (error) {
        console.error("Error saving data:", error);
        alert("Something went wrong. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});

regOverlay.addEventListener('click', closeRegistrationModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) closeModalFunc();
        if (!regModal.classList.contains('hidden')) closeRegistrationModal();
    }
});

// Initial Render
renderRoles(rolesData);

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}
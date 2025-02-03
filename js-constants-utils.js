// constants.js
const SUBJECTS = ['Math', 'Science', 'English'];

const CLASSES = [
    { id: 1, name: 'Grade 10A' },
    { id: 2, name: 'Grade 10B' },
    { id: 3, name: 'Grade 11A' },
    { id: 4, name: 'Grade 11B' },
];

const STUDENTS = {
    1: [
        { id: 101, name: 'John Smith', points: 450, parentId: 201 },
        { id: 102, name: 'Sarah Johnson', points: 380, parentId: 202 },
        { id: 103, name: 'Mike Brown', points: 420, parentId: 203 },
    ],
    2: [
        { id: 201, name: 'Emma Davis', points: 390, parentId: 204 },
        { id: 202, name: 'James Wilson', points: 410, parentId: 205 },
        { id: 203, name: 'Lisa Anderson', points: 440, parentId: 206 },
    ],
};

const BEHAVIOR_POINTS = [
    { 
        id: 1,
        action: 'Disrupting Class',
        points: -2,
        iconClass: 'alert-circle',
        type: 'negative',
        category: 'Good Behavior'
    },
    {
        id: 2,
        action: 'Class Participation',
        points: 2,
        iconClass: 'star',
        type: 'positive',
        category: 'Classroom Engagement'
    },
    {
        id: 3,
        action: 'Difficult Question',
        points: 3,
        iconClass: 'trophy',
        type: 'positive',
        category: 'Classroom Engagement'
    },
    {
        id: 4,
        action: 'Forgot Homework',
        points: -1,
        iconClass: 'x-circle',
        type: 'negative',
        category: 'Homework'
    },
    {
        id: 5,
        action: 'Has Homework',
        points: 1,
        iconClass: 'check-circle',
        type: 'positive',
        category: 'Homework'
    }
];

const VOUCHER_OPTIONS = [
    { id: 1, brand: 'Sephora', pointsCost: 200, image: '/api/placeholder/200/200' },
    { id: 2, brand: 'Nike', pointsCost: 250, image: '/api/placeholder/200/200' },
    { id: 3, brand: 'Adidas', pointsCost: 300, image: '/api/placeholder/200/200' },
    { id: 4, brand: 'Carrefour', pointsCost: 150, image: '/api/placeholder/200/200' }
];

// utils.js
const Utils = {
    formatPoints: (points) => {
        return points > 0 ? `+${points}` : points;
    },

    getStudentById: (studentId) => {
        return Object.values(STUDENTS)
            .flat()
            .find(s => s.id === studentId);
    },

    getStudentByParentId: (parentId) => {
        return Object.values(STUDENTS)
            .flat()
            .find(student => student.parentId === parentId);
    },

    calculateProgress: (current, total) => {
        return Math.min((current / total) * 100, 100);
    },

    getCurrentTimestamp: () => {
        return new Date().toLocaleTimeString();
    },

    createElementWithClass: (tag, className) => {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        return element;
    },

    hideAllViews: () => {
        document.querySelectorAll('.view-section').forEach(view => {
            view.classList.remove('active');
        });
    },

    showView: (viewId) => {
        Utils.hideAllViews();
        document.getElementById(viewId).classList.add('active');
    },

    createIcon: (iconClass) => {
        const icon = document.createElement('img');
        icon.src = `assets/icons/${iconClass}.svg`;
        icon.className = 'w-6 h-6';
        return icon;
    }
};

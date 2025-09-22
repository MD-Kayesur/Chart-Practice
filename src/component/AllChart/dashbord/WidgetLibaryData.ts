 
 
 import   PieChartComponent from "../PieChart/PieChart"
 
 export const dashboardStats = [
        { title: 'Total Project', value: '56', change: '+5% ↗', color: 'from-blue-500 to-purple-600', subtitle: '6 program Running this month' },
        { title: 'Live Project', value: '36', change: '+3% ↗', color: 'from-pink-500 to-purple-600', subtitle: '190 New user joined' },
        { title: 'Project In draft', value: '15', change: '+1% ↗', color: 'from-blue-400 to-blue-600', subtitle: '5 new clients joined' },
        { title: 'Pending Review', value: '75', change: '+8% ↗', color: 'from-green-500 to-teal-500', subtitle: '28 Score growth' }
    ];

     export const programs = [
        "Dashboard Analytics",
        "Sales Tracking",
        "Marketing Insights",
        "Financial Reports",
        "User Analytics"
    ];

    export const projects = [
        "Q4 Revenue Dashboard",
        "Marketing Campaign ROI",
        "Customer Analytics Portal",
        "Sales Performance Tracker",
        "Financial Overview Board"
    ];

    export const widgets = [
        {
            id: 'kpi',
            name: 'KPI widget',
            description: 'Display key metrics with trends',
            icon: '📊',
            category: 'metrics',
             
        },
        {
            id: 'stackedBar',
            name: 'Stacked Bar Chart',
            description: 'Compare data across categories',
            icon: '📊',
            category: 'charts',
            
        },
        {
            id: 'line',
            name: 'Line Chart',
            description: 'Track changes over time',
            icon: '📈',
            category: 'charts'
        },
        {
            id: 'pie',
            name: 'Pie Chart',
            description: 'Show proportions of a whole',
            icon: '🥧',
            category: 'charts',
          
        },
        {
            id: 'area',
            name: 'Area Chart',
            description: 'Track trends with filled areas',
            icon: '📈',
            category: 'charts'
        },
        {
            id: 'rander',
            name: 'Radar Chart',
            description: 'Track trends with filled areas',
            icon: '🖼️',
            category: 'charts'
        },
        {
            id: 'HorizontalBar',
            name: 'HorizontalBar Chart ',
            description: 'Track trends with filled areas',
            icon: '🖼️',
            category: 'charts'
        },
        
        {
            id: 'dataTable',
            name: 'Data Table',
            description: 'Display detailed data records',
            icon: '📋',
            category: 'data'
        },
        {
            id: 'progressRing',
            name: 'Progress Ring',
            description: 'Show completion percentage',
            icon: '⭕',
            category: 'indicators'
        },
        {
            id: 'gantt',
            name: 'Gantt Chart',
            description: 'Visualize project timelines',
            icon: '📅',
            category: 'planning'
        },
        {
            id: 'media',
            name: 'Picture/Video',
            description: 'Add images or videos',
            icon: '🖼️',
            category: 'media'
        }
    ];
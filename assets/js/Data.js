
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const projectID = params.get('ProjectID') ?? 2;

var project1 = "design web";
var project2 = "web";
var project3 = "web";
var project4 = "web";
var project5 = "web";
var project6 = "web";
var project7 = "web";
var project8 = "web";
var project9 = "web";
var project10 = "web";

GetProjectData();
GetProjectDetailData(projectID)

function GetProjectData() {
    var proj = Projects();
    project_list(proj);

    var cat = categories();
    categoires_list(cat);
}

function GetProjectDetailData(ProjectID) {
    var data = ProjectData(ProjectID);

    $(".project-name").text(data.project_name);
    $(".project-src").append("<iframe style='width:100%;height:560px;border-radius:9px;object-fit:fill;' src='" + data.project_src + "' ></iframe>");
    $(".project-src").attr('src', data.project_src);
    $(".description1").text(data.description1);
    $(".description2").text(data.description2);
    $(".description3").text(data.description3);
    $(".heading").text(data.heading);
    $(".project_img_1").append("<img class='img-bdrd-16 mb-30' src='" + data.project_img_1 + "' alt='Hammas Khan'>");
    $(".project_img_2").append("<img class='img-bdrd-16 mb-30' style='height: 100%;object-fit: contain;' src='" + data.project_img_2 + "' alt='Hammas Khan'>");
    $(".project_img_3").append("<img class='img-bdrd-16 mb-30' src='" + data.project_img_3 + "' alt='Hammas Khan'>");
    $(".project_img_4").append("<img class='img-bdrd-16 mb-30' src='" + data.project_img_4 + "' alt='Hammas Khan'>");
    tech_list(data.technologies);
    purpose_list(data.purpose);
}
function ProjectData(ProjectID) {
    var project = "Project" + ProjectID;
    try {
        if (typeof window[project] === 'function') {
            var objectData = window[project]();
            if (Object.keys(objectData).length === 0) {
                window.location.href = './error.html';
            }
            return objectData;
        } else {
            window.location.href = './error.html';
        }
    } catch (error) {
        window.location.href = './error.html';
    }
}


function Projects() {
    var projectlist = [];
    var obj = new Object();

    obj.category = project1;
    obj.ProjectID = 1;
    obj.project_title = "E-Form";
    obj.project_description = "The E-Form System Development project aims to create a digital platform for generating, distributing, and managing electronic forms.";
    obj.project_img = "../assets/imgs/Projects/project1/1.jpg";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project2;
    obj.ProjectID = 2;
    obj.project_title = "E-Invoice";
    obj.project_description = "The E-Invoice System Development project aims to create a digital invoicing solution that automates the creation, distribution, and management of invoices.";
    obj.project_img = "../assets/imgs/Projects/project2/2.png";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project3;
    obj.ProjectID = 3;
    obj.project_title = "DEI Directive";
    obj.project_description = "The Diversity, Equity, and Inclusion (DEI) Initiative aims to foster a culture of inclusivity within our organization. This directive outlines the strategic approach to promoting diversity, ensuring equity, and enhancing inclusion in all aspects of our operations.";
    obj.project_img = "../assets/imgs/Projects/project3/2.jpg";
    projectlist.push(obj);
    
    obj = new Object();
    obj.category = project4;
    obj.ProjectID = 4;
    obj.project_title = "Quanika";
    obj.project_description = "The Quanika Door Controller app is designed to provide seamless and secure access control management for businesses and organizations. This app enables users to remotely manage door access, monitor entry and exit activities, and integrate with existing security systems. The app offers a user-friendly interface, robust security features, and real-time notifications, ensuring enhanced control and security for all access points.";
    obj.project_img = "../assets/imgs/Projects/project4/4.jpg";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project5;
    obj.ProjectID = 5;
    obj.project_title = "FIS ERP System";
    obj.project_description = "The FIS ERP System is a comprehensive enterprise resource planning (ERP) solution designed to streamline and integrate various business processes across an organization. It offers a unified platform for managing core business functions, including finance, human resources, supply chain, manufacturing, and customer relationship management.";
    obj.project_img = "../assets/imgs/Projects/project5/4.jpg";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project6;
    obj.ProjectID = 6;
    obj.project_title = "E Commerce Digital Bazaar";
    obj.project_description = "The Digital Bazaar E-Commerce Platform project aims to create a robust, user-friendly online marketplace where vendors can sell their products, and customers can enjoy a seamless shopping experience. The platform will support a wide range of product categories, secure payment processing, and efficient order fulfillment. Key features will include vendor management, product catalog management, customer account management, and comprehensive reporting and analytics.";
    obj.project_img = "../assets/imgs/Projects/project6/1.jpg";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project7;
    obj.ProjectID = 7;
    obj.project_title = "Quiz Management System";
    obj.project_description = "The Quiz Management System project aims to develop a comprehensive platform for creating, managing, and administering quizzes. This system will cater to educational institutions, corporate training programs, and individual educators by providing a user-friendly interface for quiz creation, automated grading, and detailed performance analytics. The platform will support various question types, offer secure test environments, and enable customizable settings for different quiz formats.";
    obj.project_img = "../assets/imgs/Projects/project7/1.jpg";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project8;
    obj.ProjectID = 8;
    obj.project_title = "School Management System";
    obj.project_description = "The Comprehensive School Management System (SMS) project aims to develop an all-in-one platform to manage various administrative, academic, and extracurricular activities within a school. The system will streamline operations, improve communication, enhance data management, and provide valuable insights for decision-making. The platform will include modules for student and staff management, academic management, finance, transportation, and communication.";
    obj.project_img = "../assets/imgs/Projects/project8/1.jpg";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project9;
    obj.ProjectID = 9;
    obj.project_title = "Order Tracking System";
    obj.project_description = "The Order Tracking System project aims to develop a comprehensive platform for managing and tracking customer orders from placement to delivery. This system will enable businesses to streamline their order processing, provide customers with real-time updates, and enhance overall operational efficiency. The platform will include features for order management, real-time tracking, customer notifications, and detailed reporting.";
    obj.project_img = "../assets/imgs/Projects/project9/4.jpg";
    projectlist.push(obj);

    obj = new Object();
    obj.category = project10;
    obj.ProjectID = 10;
    obj.project_title = "Admin Panel Access Control (RBAC)";
    obj.project_description = "The Admin Panel with Role-Based Access Control (RBAC) project aims to create a secure and comprehensive administration interface for managing application settings, user roles, and permissions. This panel will provide full control over application functionalities, including user management, system configuration, and content oversight. By implementing role-based access control, the system will ensure that users have appropriate access levels based on their roles within the organization.";
    obj.project_img = "../assets/imgs/Projects/project10/1.jpg";
    projectlist.push(obj);

    return projectlist;
}

function categories() {
    var categorylist = [];

    var obj = new Object();

    obj.category_name = "All";
    obj.category_filter = "";
    categorylist.push(obj);

    obj = new Object();
    obj.category_name = "Designing";
    obj.category_filter = "design";
    categorylist.push(obj);

    obj = new Object();
    obj.category_name = "Web Development";
    obj.category_filter = "web";
    categorylist.push(obj);

    return categorylist;
}


function Project1() {
    var obj = new Object();
    obj.project_name = "E-Form";
    obj.project_src = "../assets/imgs/Projects/project2/1.jpg";
    obj.description1 = "The E-Form System Development project aims to create a digital platform for generating, distributing, and managing electronic forms. This system will streamline the form submission process, enhance data accuracy, ensure regulatory compliance, and integrate seamlessly with existing systems.";
    obj.heading = "Project Objectives";
    obj.description2 = `Automate Form Submission: Eliminate manual data entry errors and reduce processing time by automating the form submission process.
Ensure Compliance: Adhere to relevant regulations and standards for electronic data collection and storage.
Seamless Integration: Enable integration with current systems to facilitate data exchange and synchronization.
User-Friendly Design: Develop an intuitive interface that allows users to easily create, submit, and manage electronic forms.
Enhanced Security: Implement advanced security measures, including data encryption and access controls, to protect sensitive information.`;
    obj.description3 = "The E-Form System Development project will deliver a comprehensive and efficient solution for electronic form management that automates form submissions, ensures regulatory compliance, and integrates seamlessly with existing systems. By enhancing accuracy, security, and user experience, this project will provide significant benefits to organizations and their users.";
    obj.project_img_1 = "../assets/imgs/Projects/project1/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project1/2.png";
    obj.project_img_3 = "../assets/imgs/Projects/project1/3.png";
    obj.project_img_4 = "../assets/imgs/Projects/project1/4.png";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();

    return obj;
}
function Project2() {
    var obj = new Object();
    obj.project_name = "E-Invoice";
    obj.project_src = "../assets/imgs/Projects/project2/1.jpg";
    obj.description1 = "The E-Invoice System Development project aims to create a digital invoicing solution that automates the creation, distribution, and management of invoices. This system will streamline the invoicing process, enhance accuracy, ensure compliance with tax regulations, and integrate seamlessly with existing accounting and enterprise resource planning (ERP) systems.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The E-Invoice System Development project will deliver a comprehensive and efficient invoicing solution that automates the invoicing process, ensures regulatory compliance, and integrates seamlessly with existing systems. By enhancing accuracy, security, and user experience, this project will provide significant benefits to businesses and their customers.";
    obj.description3 = `Automate Invoicing: Eliminate manual invoicing errors and reduce processing time by automating the invoice creation and management process.
Ensure Compliance: Adhere to local and international tax regulations, ensuring all invoices are compliant with relevant standards.
Seamless Integration: Enable integration with current accounting and ERP systems to facilitate data exchange and synchronization.
User-Friendly Design: Develop an intuitive interface that allows users to easily create, send, and manage invoices.
Enhanced Security: Implement advanced security measures, including data encryption and access controls, to protect financial information.`;
    obj.project_img_1 = "../assets/imgs/Projects/project2/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project2/2.png";
    obj.project_img_3 = "../assets/imgs/Projects/project2/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project2/4.png";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project3() {
    var obj = new Object();
    obj.project_name = "Diversity, Equity, and Inclusion (DEI) Initiative";
    obj.project_src = "../assets/imgs/Projects/project3/1.jpg";
    obj.description1 = "The Diversity, Equity, and Inclusion (DEI) Initiative aims to foster a culture of inclusivity within our organization. This directive outlines the strategic approach to promoting diversity, ensuring equity, and enhancing inclusion in all aspects of our operations.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The Diversity, Equity, and Inclusion (DEI) Initiative aims to create a more inclusive, equitable, and diverse organization. By implementing strategic initiatives across recruitment, employee development, workplace culture, community engagement, and supplier diversity, we will foster a culture where everyone feels valued and has the opportunity to thrive.";
    obj.description3 = `APromote Diversity: Increase representation of diverse groups across all levels of the organization.
Ensure Equity: Implement policies and practices that ensure fair treatment, access, opportunity, and advancement for all individuals.
Enhance Inclusion: Create an inclusive environment where all employees feel valued, respected, and empowered to contribute to the organization's success.`;
    obj.project_img_1 = "../assets/imgs/Projects/project3/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project3/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project3/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project3/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project4() {
    var obj = new Object();
    obj.project_name = "Quanika Door Controller";
    obj.project_src = "../assets/imgs/Projects/project4/4.jpg";
    obj.description1 = "The Quanika Door Controller app is designed to provide seamless and secure access control management for businesses and organizations. This app enables users to remotely manage door access, monitor entry and exit activities, and integrate with existing security systems. The app offers a user-friendly interface, robust security features, and real-time notifications, ensuring enhanced control and security for all access points.";
    obj.heading = "Project Objectives:";
    obj.description2 = `Remote Access Management:
Grant and revoke access permissions remotely.
Schedule access for specific times and dates.
View and manage user access levels.`;
    obj.description3 = `The Quanika Door Controller app is a comprehensive solution for managing access control in various settings, from corporate offices to residential complexes. Its robust features, user-friendly interface, and strong security measures ensure that organizations can efficiently and securely manage access to their facilities.`;
    obj.project_img_1 = "../assets/imgs/Projects/project4/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project4/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project4/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project4/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project5() {
    var obj = new Object();
    obj.project_name = "FIS ERP System";
    obj.project_src = "../assets/imgs/Projects/project5/3.jpg";
    obj.description1 = "The FIS ERP System is a comprehensive enterprise resource planning (ERP) solution designed to streamline and integrate various business processes across an organization. It offers a unified platform for managing core business functions, including finance, human resources, supply chain, manufacturing, and customer relationship management. The system enhances operational efficiency, provides real-time insights, and supports decision-making, enabling organizations to achieve greater productivity and scalability.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The FIS ERP System is a powerful solution for organizations seeking to enhance their operational efficiency, gain real-time insights, and support strategic decision-making. By integrating core business processes into a single platform, it enables organizations to streamline operations, improve collaboration, and drive growth.";
    obj.description3 = `Finance and Accounting:

General ledger, accounts payable, and accounts receivable management.
Budgeting, forecasting, and financial reporting.
Multi-currency support and financial consolidation.
Automated invoicing and payment processing.
Human Resources:

Employee records management and payroll processing.
Recruitment and onboarding workflows.
Performance management and employee self-service portals.
Training and development tracking.
Supply Chain Management:

Inventory management and procurement.
Supplier relationship management.
Order processing and fulfillment.
Warehouse management and logistics planning.
Manufacturing:

Production planning and scheduling.
Bill of materials (BOM) and work order management.
Quality control and compliance tracking.
Maintenance management and machine performance monitoring.
Customer Relationship Management (CRM):

Customer data management and segmentation.
Sales pipeline and opportunity tracking.
Marketing campaign management.
Customer service and support ticketing.`;
    obj.project_img_1 = "../assets/imgs/Projects/project5/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project5/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project5/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project5/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project6() {
    var obj = new Object();
    obj.project_name = "E-Commerce Digital Bazaar";
    obj.project_src = "../assets/imgs/Projects/project6/1.jpg";
    obj.description1 = "The Digital Bazaar E-Commerce Platform project aims to create a robust, user-friendly online marketplace where vendors can sell their products, and customers can enjoy a seamless shopping experience. The platform will support a wide range of product categories, secure payment processing, and efficient order fulfillment. Key features will include vendor management, product catalog management, customer account management, and comprehensive reporting and analytics.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The Digital Bazaar E-Commerce Platform will provide a comprehensive solution for businesses to sell products online and for customers to enjoy a seamless shopping experience. By integrating robust features for vendor management, secure payment processing, and data analytics, the platform will drive sales growth and operational efficiency for businesses of all sizes.";
    obj.description3 = `Build an Intuitive Marketplace: Develop a platform that is easy to navigate for both vendors and customers.
Support Multiple Vendors: Allow multiple vendors to create stores, list products, and manage orders.
Secure Payment Processing: Integrate secure payment gateways to handle transactions.
Efficient Order Fulfillment: Streamline the order fulfillment process to ensure timely delivery.
Data Analytics: Provide tools for vendors and administrators to analyze sales and customer behavior.`;
    obj.project_img_1 = "../assets/imgs/Projects/project6/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project6/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project6/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project6/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project7() {
    var obj = new Object();
    obj.project_name = "Quiz Management System";
    obj.project_src = "../assets/imgs/Projects/project7/1.jpg";
    obj.description1 = "The Quiz Management System project aims to develop a comprehensive platform for creating, managing, and administering quizzes. This system will cater to educational institutions, corporate training programs, and individual educators by providing a user-friendly interface for quiz creation, automated grading, and detailed performance analytics. The platform will support various question types, offer secure test environments, and enable customizable settings for different quiz formats.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The Quiz Management System will provide a comprehensive solution for creating, administering, and managing quizzes. By offering robust features for quiz creation, automated grading, secure administration, and detailed analytics, the platform will enhance the efficiency and effectiveness of educational assessments for institutions, educators, and corporate training programs.";
    obj.description3 = `Simplify Quiz Creation: Provide tools to easily create and organize quizzes with various question types.
Automate Grading: Implement automated grading for objective questions to save time and ensure accuracy.
Enhance Security: Ensure a secure environment to prevent cheating and protect quiz content.
Provide Analytics: Offer detailed analytics on quiz performance to help educators and administrators track progress and identify areas for improvement.
Support Flexibility: Allow customizable settings to accommodate different quiz formats and requirements.`;
    obj.project_img_1 = "../assets/imgs/Projects/project7/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project7/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project7/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project7/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project8() {
    var obj = new Object();
    obj.project_name = "School Management System";
    obj.project_src = "../assets/imgs/Projects/project8/2.jpg";
    obj.description1 = "The Comprehensive School Management System (SMS) project aims to develop an all-in-one platform to manage various administrative, academic, and extracurricular activities within a school. The system will streamline operations, improve communication, enhance data management, and provide valuable insights for decision-making. The platform will include modules for student and staff management, academic management, finance, transportation, and communication.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The Comprehensive School Management System will provide an all-inclusive solution for managing various aspects of school operations. By integrating modules for student and staff management, academic planning, finance, transportation, and communication, the system will enhance efficiency, improve communication, and provide valuable insights for school administrators, teachers, students, and parents.";
    obj.description3 = `Streamline Administrative Processes: Automate and simplify school administrative tasks.
Enhance Academic Management: Provide tools for managing schedules, grades, and assessments.
Improve Communication: Facilitate better communication between teachers, students, parents, and administration.
Ensure Data Security: Protect sensitive data with robust security measures.
Provide Insights: Offer detailed reports and analytics to support informed decision-making.`;
    obj.project_img_1 = "../assets/imgs/Projects/project8/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project8/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project8/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project8/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project9() {
    var obj = new Object();
    obj.project_name = "Order Tracking System";
    obj.project_src = "../assets/imgs/Projects/project9/1.jpg";
    obj.description1 = "The Order Tracking System will provide businesses with a powerful tool to manage and track orders efficiently. By offering real-time tracking, automated notifications, and detailed reporting, the system will enhance operational efficiency, improve customer satisfaction, and support data-driven decision-making. The platform will cater to various industries, including e-commerce, retail, logistics, and manufacturing, making it a versatile solution for order management and tracking.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The FIS ERP System is a powerful solution for organizations seeking to enhance their operational efficiency, gain real-time insights, and support strategic decision-making. By integrating core business processes into a single platform, it enables organizations to streamline operations, improve collaboration, and drive growth.";
    obj.description3 = `Streamline Order Management: Simplify and automate the process of order handling from placement to fulfillment.
Provide Real-Time Tracking: Offer customers real-time visibility into their order status and delivery progress.
Enhance Customer Communication: Improve communication with customers through notifications and updates.
Optimize Fulfillment: Efficiently manage inventory, shipping, and delivery operations.
Generate Insights: Provide detailed reports and analytics on order performance and trends.`;
    obj.project_img_1 = "../assets/imgs/Projects/project9/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project9/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project9/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project9/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}
function Project10() {
    var obj = new Object();
    obj.project_name = "Admin Panel with Role-Based Access Control (RBAC)";
    obj.project_src = "../assets/imgs/Projects/project10/1.jpg";
    obj.description1 = "The Admin Panel with Role-Based Access Control (RBAC) project aims to create a secure and comprehensive administration interface for managing application settings, user roles, and permissions. This panel will provide full control over application functionalities, including user management, system configuration, and content oversight. By implementing role-based access control, the system will ensure that users have appropriate access levels based on their roles within the organization.";
    obj.heading = "Project Objectives:";
    obj.description2 = "The Admin Panel with Role-Based Access Control will provide a powerful and secure interface for managing application settings, user roles, and permissions. By offering comprehensive control, enhanced security, and detailed reporting, the system will streamline administrative tasks and ensure that users have appropriate access to application features. This solution will be essential for organizations looking to manage complex applications and maintain high levels of security and efficiency.";
    obj.description3 = `Implement Role-Based Access Control: Define and manage user roles with specific permissions to control access to various application features.
Provide Full Application Control: Enable administrators to manage all aspects of the application, including users, settings, and data.
Enhance Security: Ensure secure access to the admin panel and protect sensitive information.
Streamline Management: Simplify administrative tasks through an intuitive and user-friendly interface.
Generate Reports: Offer reporting tools for tracking system usage, user activity, and administrative actions.`;
    obj.project_img_1 = "../assets/imgs/Projects/project10/1.jpg";
    obj.project_img_2 = "../assets/imgs/Projects/project10/2.jpg";
    obj.project_img_3 = "../assets/imgs/Projects/project10/3.jpg";
    obj.project_img_4 = "../assets/imgs/Projects/project10/4.jpg";
    obj.technologies = commonTechs();
    obj.purpose = commonPurpose();
    return obj;
}


function project_list(data) {
    $("#Projects").empty();
    var html = "";
    $.each(data, function (index, item) {
        html += project_Html(item);
    });
    $("#Projects").append(html);
}
function categoires_list(data) {
    $("#categoires").empty();
    var html = "";
    $.each(data, function (index, item) {
        html += category_Html(item, index);
    });
    $("#categoires").append(html);
}
function tech_list(technologies) {
    $("#tech-list").empty();
    var html = "";
    $.each(technologies, function (index, item) {
        html += techList_Html(item);
    });
    $("#tech-list").append(html);
}
function purpose_list(purpose) {
    $("#purpose-list").empty();
    var html = "";
    $.each(purpose, function (index, item) {
        html += purpose_Html(item);
    });
    $("#purpose-list").append(html);
}


function techList_Html(item) {
    var html = "";
    html += "<div class='item-cats border-gray-800 wow animate__animated animate__fadeIn'>";
    html += "<div class='cat-left'>";
    html += "<div class='image-cat'>";
    html += "<a href='javascript:void(0);'>";
    html += "<img class='technology_img' src='" + item.technology_img + "' alt='Hammas Khan'>";
    html += "</a>";
    html += "</div>";
    html += "<div class='info-cat'>";
    html += "<a class='color-gray-500 text-xl technology_name' href='javascript:void(0);'>" + item.technology_name + "</a>";
    html += "</div>";
    html += "</div>";
    html += "<div class='cat-right'>";
    html += "<a class='btn btn-small text-sm color-gray-500 bg-gray-800 technology_type' href='javascript:void(0);'>";
    html += item.technology_type;
    html += "</a>";
    html += "</div>";
    html += "</div>";
    return html;
}
function purpose_Html(item) {
    var html = ""
    html += "<div class='item-post wow animate__animated animate__fadeIn'>";
    if (item.purpose_img !== "") {
        html += "<div class='image-post'>";
        html += "<a href='javascript:void(0);'>";
        html += "<img class='purpose_img' src='" + item.purpose_img + "' alt='Hammas Khan'>";
        html += "</a>";
        html += "</div>";
    }
    html += "<div class='info-post border-gray-800'>";
    html += "<a href='javascript:void(0);'>";
    html += "<h6 class='color-white purpose_text'>" + item.purpose_text + "</h6>";
    html += "</a>";
    html += "</div>";
    html += "</div>";
    return html;
}
function project_Html(item) {
    var html = "";

    html += "<div class='col-lg-4'>";
    html += "<div class='project' data-category='" + item.category + "'>";
    html += "<div class='item-content'>";
    html += "<div class='card-style-1 hover-up mb-30' data-wow-delay='.0s'>";
    html += "<div class='card-image'>";
    html += "<a class='link-post' href='./projectDetail.html?ProjectID=" + item.ProjectID + "'>";
    html += "<img style='object-fit: fill;' src='" + item.project_img + "' alt='Hammas Khan'>";
    html += "<div class='card-info card-bg-2'>";
    html += "<div class='info-bottom mb-15'>";
    html += "<h3 class='color-white mb-10'>" + item.project_title + "</h3>";
    html += "<p class='color-gray-500 text-sm'>" + item.project_description + "</p>";
    html += "</div>";
    html += "</div>";
    html += "</a> ";
    html += "</div> ";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    return html;
}
function category_Html(item, index) {
    var html = "";
    html += "<span class='wow animate__animated animate__fadeInUp' data-wow-delay='." + index + "0s'>";
    html += "<span class='btn btn-border-linear btn-filter hover-up' data-filter='" + item.category_filter + "'>" + item.category_name + "</span>";
    html += "</span>";
    return html;
}

function commonPurpose() {
    var objListpurpose = [];

    var purpose = new Object();
    purpose.purpose_img = "";
    purpose.purpose_text = "Allow users to customize form templates to match their requirements.";
    objListpurpose.push(purpose);

    purpose = new Object();
    purpose.purpose_img = "";
    purpose.purpose_text = "Integrate with data processing systems to automate the analysis and storage of form data.";
    objListpurpose.push(purpose);

    purpose = new Object();
    purpose.purpose_img = "";
    purpose.purpose_text = "Eliminate manual data entry errors and reduce processing time by automating the form submission process.";
    objListpurpose.push(purpose);

    purpose = new Object();
    purpose.purpose_img = "";
    purpose.purpose_text = "Provide a mobile-friendly interface for creating and managing forms on the go.";
    objListpurpose.push(purpose);
    return objListpurpose;
}
function commonTechs() {
    var objList = [];

    var tech = new Object();
    tech.technology_img = "../assets/imgs/skills/html5.png";
    tech.technology_name = "HTML";
    tech.technology_type = "Design";
    objList.push(tech);

    tech = new Object();
    tech.technology_img = "../assets/imgs/skills/css3.png";
    tech.technology_name = "CSS";
    tech.technology_type = "Design";
    objList.push(tech);

    tech = new Object();
    tech.technology_img = "../assets/imgs/skills/javascript.png";
    tech.technology_name = "JavaScript";
    tech.technology_type = "Framework";
    objList.push(tech);

    tech = new Object();
    tech.technology_img = "../assets/imgs/skills/ajax.png";
    tech.technology_name = "JSON";
    tech.technology_type = "Form.io";
    objList.push(tech);

    tech = new Object();
    tech.technology_img = "../assets/imgs/skills/dotNETCore.png";
    tech.technology_name = "Dot Net Core";
    tech.technology_type = "C#";
    objList.push(tech);

    return objList;
}
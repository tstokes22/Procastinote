# Procrastinote: Task Management Application

### Class-Based Vanilla JavaScript Productivity Tool

<img width="1281" height="847" alt="image" src="https://github.com/user-attachments/assets/d1f31670-1371-4951-9e3b-c70edf05d3d7" />

# Project Overview

Procrastinote is a streamlined, responsive task management application designed to help users capture and organize notes efficiently. Developed using Vanilla JavaScript, the project emphasizes clean DOM manipulation and an object-oriented approach to frontend state management. The application provides a focused environment for task tracking, featuring dynamic UI updates and a fixed-limit note area to prevent cognitive overload.

# Key Features

  Encapsulated Logic: Built using a JavaScript ToDoList class to manage all task-related behaviors, including input monitoring and list rendering.

Dynamic UI Responsiveness: The "Add Note" button remains hidden until valid text is entered, ensuring a clean and intuitive user interface.

Interactive Task States: Users can toggle task completion with a checkbox, which dynamically updates the visual state of the note with a line-through style.

Task Management & Limits: Includes built-in safeguards to limit the note area to 18 tasks, maintaining the application's aesthetic integrity and usability.

Efficient Deletion: Integrates a custom SVG-based trash icon for quick removal of individual tasks and automated management of the total task count.

# Technical Deep Dive

The application demonstrates core competencies in modern frontend development:

  Class-Based Architecture: Leverages a constructor and bindEventListeners() method within a class to handle the initialization and event flow, showcasing foundational understanding of Object-Oriented Programming (OOP) in JavaScript.

DOM Manipulation: Dynamically generates complex list items (li) containing checkboxes, text inputs, and interactive buttons using document.createElement().

Event Handling: Implements multiple event listeners (click, input, change) to respond to user actions in real-time.

Advanced CSS Layouts: Utilizes Flexbox for centering the UI and Absolute Positioning for the note area, complemented by custom box shadows for a modern "elevation" effect.

Form Validation: Employs .trim() and empty-string checks to ensure that only valid, non-blank notes are persisted to the list.

# Dynamics ERPNext Theme (v3)

A custom ERPNext/Frappe app that transforms the user interface to resemble **Microsoft Dynamics 365**, including:

* Full blue Dynamics-style sidebar
* Clean modern UI (cards, forms, tables)
* Custom login page styling
* CEO dashboard workspace
* Improved buttons, typography, and layout

---

## 🚀 Installation (via GitHub)

### Step 1: Get the App

Navigate to your bench directory and pull the app:

```bash
cd ~/frappe-bench
bench get-app https://github.com/ERPNEXT/dynamics_erpnext_theme.git
```

---

### Step 2: Install on Your Site

```bash
bench --site yoursite install-app dynamics_erpnext_theme
```

---

### Step 3: Build & Apply Changes

```bash
bench build
bench --site yoursite migrate
bench --site yoursite clear-cache
bench restart
```

---

## 🔄 Updating the App

To pull the latest updates from GitHub:

```bash
cd ~/frappe-bench/apps/dynamics_erpnext_theme
git pull
cd ~/frappe-bench
bench build
bench --site yoursite migrate
bench restart
```

---

## 🧠 Features Included

### 🎨 UI Theme

* Microsoft Dynamics-inspired color scheme
* Blue sidebar with active highlights
* Modern card layout with shadows and spacing
* Segoe UI-style typography

### 🔐 Login Page

* Styled login screen matching Dynamics look
* Clean and professional layout

### 📊 CEO Dashboard Workspace

* Executive-level overview workspace
* Quick links to:

  * Projects
  * Sales / Invoices
  * Stock / Warehouse
  * HR & Payroll
* Designed for top-level monitoring

---

## ⚙️ Requirements

* ERPNext v15+
* Frappe Framework v15+
* Bench environment

---

## 📁 App Structure

```
dynamics_erpnext_theme/
├── dynamics_erpnext_theme/
│   ├── public/
│   │   ├── css/
│   │   ├── js/
│   │   └── workspace/
│   ├── hooks.py
│   └── config/
├── README.md
```

---

## ⚠️ Notes

* This is a **UI/UX theme app only** — it does not modify core ERP logic.
* Safe to use alongside:

  * custom workflows
  * payroll customizations
  * SBC project setups
* Always run `bench build` after updates.

---

## 🛠 Troubleshooting

### App not showing correctly

```bash
bench build
bench --site yoursite clear-cache
bench restart
```

---

### CEO Dashboard not visible

```bash
bench --site yoursite migrate
```

---

### CSS not applied

Hard refresh browser:

```
Ctrl + Shift + R
```

---

## 🔮 Roadmap (Optional Enhancements)

* Role-based dashboards (CEO / Projects / Accounts)
* Dark mode toggle
* Mobile UX improvements
* KPI widgets (Revenue, Projects, Stock)
* Power BI–style analytics cards

---

## 👨‍💻 Author

Developed for ERPNext customization and enterprise UI enhancement.

---

## 📜 License

MIT License

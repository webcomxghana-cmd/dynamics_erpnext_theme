# Dynamics ERPNext Theme v3

This app gives ERPNext/Frappe a Microsoft Dynamics inspired UI with:
- full blue sidebar styling
- refined buttons, forms, tables, and cards
- enhanced login page styling
- CEO dashboard quick actions and card treatment
- bundled **CEO Dashboard** workspace fixture

## Install

```bash
cd ~/frappe-bench/apps
unzip dynamics_erpnext_theme_v3.zip
cd ~/frappe-bench
bench --site yoursite install-app dynamics_erpnext_theme
bench build
bench --site yoursite migrate
bench --site yoursite clear-cache
bench restart
```

## If v2 is already installed
Replace the app folder with this version, then run:

```bash
bench build
bench --site yoursite migrate
bench --site yoursite clear-cache
bench restart
```

## CEO Dashboard included
This version adds a **CEO Dashboard** workspace with:
- executive shortcuts for Accounting, Selling, Stock, and Projects
- executive cards for Operations, Finance, and People & Projects
- quick monitoring links for Projects, Sales Invoices, Purchase Orders, and Payroll Entries

## Notes
- The workspace is provided as a fixture and imports during `bench migrate`.
- Some linked pages depend on the corresponding ERPNext modules being installed and enabled.
- You can further tailor the workspace by editing `dynamics_erpnext_theme/dynamics_erpnext_theme/fixtures/workspace.json`.

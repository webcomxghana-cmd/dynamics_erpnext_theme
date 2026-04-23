app_name = "dynamics_erpnext_theme"
app_title = "Dynamics ERPNext Theme"
app_publisher = "OpenAI"
app_description = "Microsoft Dynamics inspired blue sidebar, custom login page, and CEO dashboard styling"
app_email = "support@example.com"
app_license = "MIT"

app_include_css = [
    "/assets/dynamics_erpnext_theme/css/dynamics_theme.css",
]

app_include_js = [
    "/assets/dynamics_erpnext_theme/js/dynamics_theme.js",
]

web_include_css = [
    "/assets/dynamics_erpnext_theme/css/dynamics_login.css",
]

website_context = {
    "favicon": "/assets/dynamics_erpnext_theme/images/dynamics-favicon.svg"
}


fixtures = [
    {
        "dt": "Workspace",
        "filters": [["name", "in", ["CEO Dashboard"]]]
    }
]

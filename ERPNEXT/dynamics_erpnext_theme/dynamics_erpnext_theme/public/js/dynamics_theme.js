frappe.provide("dynamics_theme");

(function() {
    function applyThemeFlags() {
        document.body.classList.add("dynamics-theme");
        document.documentElement.style.setProperty("--left-sidebar-width", "248px");

        const page = frappe.get_route ? (frappe.get_route() || []).join("/") : "";
        if (page && (page.includes("Workspaces") || page.includes("workspace"))) {
            document.body.classList.add("dynamics-workspace");
        } else {
            document.body.classList.remove("dynamics-workspace");
        }
    }

    function injectQuickActions() {
        if (!frappe.router || !frappe.get_route) return;
        const route = frappe.get_route() || [];
        const page = route[0] || "";
        if (page !== "Workspaces" && page !== "workspace") return;

        setTimeout(() => {
            const pageHead = document.querySelector(".layout-main .page-head, .desk-page .page-head");
            if (!pageHead || pageHead.querySelector(".dyn-ceo-actions")) return;

            const wrap = document.createElement("div");
            wrap.className = "dyn-ceo-actions";
            wrap.innerHTML = `
                <button class="btn btn-primary btn-sm dyn-action" data-route="List/Project/List">Projects</button>
                <button class="btn btn-default btn-sm dyn-action" data-route="query-report/Accounts Receivable">Receivables</button>
                <button class="btn btn-default btn-sm dyn-action" data-route="query-report/Accounts Payable">Payables</button>
                <button class="btn btn-default btn-sm dyn-action" data-route="List/Task/List">Tasks</button>
            `;
            pageHead.appendChild(wrap);

            wrap.querySelectorAll(".dyn-action").forEach(btn => {
                btn.addEventListener("click", () => {
                    frappe.set_route(btn.dataset.route);
                });
            });
        }, 250);
    }

    function styleCards() {
        setTimeout(() => {
            document.querySelectorAll(".widget, .number-card, .dashboard-graph, .chart-wrapper, .form-section-card").forEach(el => {
                el.classList.add("dyn-card-ready");
            });
        }, 100);
    }

    frappe.ready(() => {
        applyThemeFlags();
        injectQuickActions();
        styleCards();
    });

    if (frappe.router) {
        frappe.router.on("change", () => {
            applyThemeFlags();
            injectQuickActions();
            styleCards();
        });
    }

    $(document).on("app_ready", function() {
        applyThemeFlags();
        injectQuickActions();
        styleCards();
    });
})();

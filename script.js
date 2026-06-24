(function () {
  "use strict";

  /* ── Problems by party ───────────────────────────────────────────── */

  var PROBLEMS = {
    customer: [
      {
        title: "Go-live treated as the finish line",
        text: "Licences go live but recruiters keep using Excel, WhatsApp, and old habits. ROI is judged at launch — not at adoption.",
      },
      {
        title: "Business case comes too late",
        text: "A demo sparks enthusiasm; the business case is written afterwards. Without sharp success criteria, every euro spent feels risky.",
      },
      {
        title: "Nobody owns the grey zone",
        text: "Customer-side architecture, change management, and adoption governance sit between parties — and bounce back and forth.",
      },
      {
        title: "Fragmented application landscape",
        text: "Dozens of planning tools, shadow IT, and duplicate data entry. Strategy and processes are unclear before new tooling is bought.",
      },
      {
        title: "Business not engaged as a co-owner",
        text: "IT runs the project; operations is consulted late. Leaders do not use the tool themselves — so teams do not follow.",
      },
    ],
    vendor: [
      {
        title: "No business case present",
        text: "Has the organisation made a business case for this new/expanded investment? What is the topline- and bottomline projected impact for the business? What business drivers and processes is your technology enabling?",
      },
      {
        title: "Demos without a defined use case",
        text: "Marketing features land well — but the customer's real process pain was never validated. Expectations diverge after contract signature.",
      },
      {
        title: "Adoption risk becomes churn risk",
        text: "When usage and adoption stays low, licences are questioned, renewals are at risk, and the platform is blamed instead of the lack of a validated business case and business processes, internal training resources and product ownership.",
      },
      {
        title: "Scope creep from unowned decisions",
        text: "Backlog priorities shift without a customer-side owner who balances business, IT, and adoption — slowing time-to-value.",
      },
      {
        title: "Pressure to answer beyond the product",
        text: "Vendors are pulled into customer org design, change strategy, and neutral architecture — outside their core role.",
      },
    ],
    integrator: [
      {
        title: "Build starts before the customer is ready",
        text: "Processes are high-level; requirements are unstable. Fit/gap work runs while the business is still discovering what it needs.",
      },
      {
        title: "Functional gaps discovered too late",
        text: "Without customer-side architecture and process validation, integration and configuration rework inflates cost and timeline.",
      },
      {
        title: "Training is a one-off event",
        text: "Hypercare ends; adoption is assumed. Friction on the floor is not fed back into the backlog with clear ownership.",
      },
      {
        title: "Customer PM, Architecture, Change & Adoption capabilities are missing",
        text: "No one on the customer side holds the integrator accountable to business outcomes and technical adherence to existing application architecture standards.",
      },
    ],
  };

  /* ── Classic implementation cycle ─────────────────────────────────── */

  var CYCLE = [
    {
      id: "trigger",
      label: "Trigger & case",
      typical: "Urgency from a demo or competitor move. Business case is vague; success metrics undefined.",
      dse: "Validate strategy, process pain, and ROI before vendor conversations.",
    },
    {
      id: "select",
      label: "Selection",
      typical: "Long list of boilerplate features and requirements from vendor outreach. Binary scoring on features instead of categorising on standard, configuration, roadmap, and custom development. Technology providers are not aware of differentiating unique deviations from standard processes/requirements — which does not allow them to tailor a bespoke demo to the customer's specific processes and journeys.",
      dse: "Proven 7-step neutral selection (Steps 0–7) on customer requirements.",
    },
    {
      id: "design",
      label: "Design",
      typical: "Solution design driven by integrator template. To-be processes not agreed with operations.",
      dse: "Customer-side architecture & process definition sign-off.",
    },
    {
      id: "build",
      label: "Build",
      typical: "IT project mode. Business tests late; adoption not planned in parallel.",
      dse: "Bridging business with IT as soon and as often as possible. Validating build progress against validated processes. Project management on customer to-dos impacting integrator progress. Guiding user acceptance testing and starting internal and external communication initiatives adhering to ADKAR methodology.",
    },
    {
      id: "test",
      label: "Test & UAT",
      typical: "IT tests scenarios; real floor workflows and edge cases surface after go-live.",
      dse: "Friction discovery with key users; adoption criteria in test plan.",
    },
    {
      id: "golive",
      label: "Go-live",
      typical: "Treated as project closure. Party, then back to business as usual.",
      dse: "Go-live is halfway — hypercare and adoption governance start here.",
      isGolive: true,
    },
    {
      id: "hypercare",
      label: "Hypercare",
      typical: "Short support window; then tickets drop and usage erodes.",
      dse: "Playbooks, bite-size learning, steerco on adoption KPIs.",
    },
    {
      id: "steady",
      label: "Steady state",
      typical: "SaaS becomes a cost line. Releases land without change impact assessment.",
      dse: "Resilient application team and product ownership, continuous improvement, reflection on business case, usage friction loops, and steering on adoption metrics.",
    },
  ];

  /* ── Grey zone responsibilities ─────────────────────────────────── */

  var GREY_ZONE = [
    "Technology selection (customer-side)",
    "Application & integration architecture",
    "Customer-side project management",
    "Change & adoption programme",
    "Business case & baseline metrics",
    "Process design & validation",
    "Post-go-live adoption governance",
    "Building a resilient internal app team",
  ];

  /* ── Value propositions ───────────────────────────────────────────── */

  var VALUE = {
    customer: {
      tagline:
        "A fully integrated and objectively architected strategy, process, and technology landscape for your staffing & recruitment organisation.",
      points: [
        "Thorough internal project management on your side of the table",
        "Change & adoption management from before build through steady state",
        "Help building a resilient internal application team",
        "Clarity on strategy, processes, and digital maturity before you buy",
        "We know every seat at the table — and who should own what is classically unassigned",
      ],
    },
    vendor: {
      tagline: "A smoother, faster path to go-live — and lower churn because customers actually use the platform.",
      points: [
        "Customer arrives at the table with a validated business case, processes, and unique requirements.",
        "Fewer scope surprises because process and architecture were settled early",
        "Adoption planned in parallel — not blamed on the product after go-live",
        "Neutral partner coordinates customer, vendor, and integrator without competing with your sale",
      ],
    },
    integrator: {
      tagline:
        "A well-prepared customer — ready to tackle functional and technical challenges that impact your core implementation.",
      points: [
        "Signed-off processes and customer-side architecture before build accelerates",
        "Customer PM holds business accountable for decisions and UAT",
        "Change programme reduces rework from floor friction after go-live",
        "Clear boundaries: you build; we govern adoption and customer-side ownership",
      ],
    },
  };

  /* ── Methodology pillars ──────────────────────────────────────────── */

  var METHODOLOGY = [
    {
      id: "scan",
      title: "Business & Digital Scan",
      lead: "±6 hours in 3 sessions — shared baseline before budget hits the table.",
      steps: [
        { n: "01", t: "Organisation & strategy", d: "Business Model Canvas incl. M&A" },
        { n: "02", t: "Business scan", d: "Customer, candidate & employee journeys" },
        { n: "03", t: "Digital scan", d: "Landscape, data, integrations, shadow IT" },
        { n: "04", t: "Roadmap", d: "Priorities, maturity gap, business cases" },
      ],
    },
    {
      id: "selection",
      title: "Technology selection (7 steps)",
      lead:
        "From “do we need a new ATS?” through signing and adoption planning — vendor-neutral, grounded in staffing workflows. Steps 0 and 1 overlap with the Business & Digital Scan where helpful.",
      steps: [
        {
          n: "00",
          t: "Do you need a new ATS?",
          d: "Challenge strategy and process first; check adoption of current tooling before buying",
        },
        {
          n: "01",
          t: "Know yourself",
          d: "Business case, 3–5 year direction, organisational DNA, journeys, process non-negotiables",
        },
        {
          n: "02",
          t: "Build the project group",
          d: "C-level sponsor, strategists, operators, critical voice — IT representation last",
        },
        {
          n: "03",
          t: "Market exploration",
          d: "Independent longlist: vision, fit, service, implementation partners and references",
        },
        {
          n: "04",
          t: "The RFP — you set the agenda",
          d: "Your story, business case, process flows, criteria — test who thinks vs who sells licences",
        },
        {
          n: "05",
          t: "Demos that prove the match",
          d: "Custom use cases, must-haves vs nice-to-haves, roadmap, APIs — project group in the room",
        },
        {
          n: "06",
          t: "Project plan before you sign",
          d: "Scope, milestones, RASCI, pricing and change requests — steerco and workshops",
        },
        {
          n: "07",
          t: "Adoption & continuous improvement",
          d: "Plan adoption in selection: training cycles, super users, feedback loop — not after go-live only",
        },
      ],
    },
    {
      id: "architecture",
      title: "Application architecture",
      lead: "Objective map of the customer's landscape — how ATS fits with CRM, VMS, payroll, BI.",
      steps: [
        { n: "—", t: "As-is / to-be landscape", d: "Systems, data flows, ownership" },
        { n: "—", t: "Integration patterns", d: "APIs, migration, single source of truth" },
        { n: "—", t: "Governance model", d: "Releases, roles, security & compliance" },
      ],
    },
    {
      id: "pm",
      title: "Customer-side project management",
      lead: "Business in the lead — not an IT project in disguise.",
      steps: [
        { n: "—", t: "Steerco & decision log", d: "Executive sponsor, clear cadence" },
        { n: "—", t: "Backlog governance", d: "Change advisory board with adoption lens" },
        { n: "—", t: "Risk & dependency tracking", d: "Between business, vendor, integrator" },
      ],
    },
    {
      id: "adoption",
      title: "Change & adoption",
      lead: "From awareness before implementation through months after go-live.",
      steps: [
        { n: "—", t: "Change advisory board", d: "Adoption-critical backlog decisions" },
        { n: "—", t: "Playbooks & bite-size learning", d: "Role-based, not one big training day" },
        { n: "—", t: "Friction sessions", d: "Floor reality → feedback loop for product backlog" },
        { n: "—", t: "Hypercare & KPIs", d: "Usage, data quality, throughput" },
      ],
    },
  ];

  /* ── References (Notion DSE Projects + portfolio) ─────────────────── */

  var PROJECTS = [
    {
      customer: "Proman Jobs",
      project: "Change & Adoption Greenfield",
      status: "Ongoing",
      type: "Interim management",
      methods: ["Change & Adoption", "Project management", "Process design"],
      source: "notion",
    },
    {
      customer: "Kasparov Finance & BI",
      project: "Business & Digital Scan",
      status: "Planned",
      type: "Consulting",
      methods: ["Business & Digital Scan"],
      source: "notion",
    },
    {
      customer: "TMC",
      project: "Global rollout — ATS Recruitment Cloud",
      status: "Ongoing",
      type: "Consulting",
      methods: ["Project management", "Change & Adoption"],
      source: "notion",
    },
    {
      customer: "TMC",
      project: "AI programme management",
      status: "Ongoing",
      type: "Consulting",
      methods: ["Project management", "Business case"],
      source: "notion",
    },
    {
      customer: "TMC",
      project: "Technology selection (17 countries)",
      status: "Register",
      type: "Consulting",
      methods: ["Technology selection"],
      source: "notion",
    },
    {
      customer: "Logistic Force",
      project: "Technology selection — ATS group rollout",
      status: "Register",
      type: "Consulting",
      methods: ["Technology selection"],
      source: "notion",
    },
    {
      customer: "Personato",
      project: "ATS selection (with Mettom)",
      status: "Register",
      type: "Consulting",
      methods: ["Technology selection"],
      source: "notion",
    },
    {
      customer: "Effect",
      project: "Implementation management — ATS Recruitment Cloud",
      status: "Register",
      type: "Consulting",
      methods: ["Project management"],
      source: "notion",
    },
    {
      customer: "VNOM",
      project: "Implementation management — ATS Recruitment Cloud",
      status: "Register",
      type: "Consulting",
      methods: ["Project management"],
      source: "notion",
    },
    {
      customer: "Logi-Technic",
      project: "Salesforce architecture, change & adoption",
      status: "Register",
      type: "Consulting",
      methods: ["Architecture", "Change & Adoption"],
      source: "notion",
    },
    {
      customer: "Covebo Bouw & Techniek",
      project: "Change management — Connexys adoption",
      status: "Register",
      type: "Consulting",
      methods: ["Change & Adoption"],
      source: "notion",
    },
    {
      customer: "Loyal Interim",
      project: "ATS adoption & process design",
      status: "Register",
      type: "Consulting",
      methods: ["Change & Adoption", "Process design"],
      source: "notion",
    },
    {
      customer: "AXS",
      project: "Project management — digital board support",
      status: "Register",
      type: "Consulting",
      methods: ["Project management"],
      source: "notion",
    },
    {
      customer: "Enginear",
      project: "Salesforce architecture — Connexys",
      status: "Register",
      type: "Consulting",
      methods: ["Architecture"],
      source: "notion",
    },
    {
      customer: "Acerta Career Center",
      project: "Salesforce architecture",
      status: "Register",
      type: "Consulting",
      methods: ["Architecture"],
      source: "notion",
    },
    {
      customer: "Hyphen",
      project: "ATS technology selection",
      status: "Finished",
      type: "Consulting",
      methods: ["Technology selection"],
      source: "notion",
    },
    {
      customer: "Logi-Technic",
      project: "Recruitment marketing automation selection",
      status: "Finished",
      type: "Consulting",
      methods: ["Technology selection"],
      source: "notion",
    },
    {
      customer: "House of Covebo",
      project: "Process design & change management",
      status: "Finished",
      type: "Consulting",
      methods: ["Process design", "Change & Adoption", "Project management"],
      source: "notion",
    },
    {
      customer: "Cuzo",
      project: "Business consulting",
      status: "Finished",
      type: "Consulting",
      methods: ["Business & Digital Scan", "Business case"],
      source: "notion",
    },
    {
      customer: "YER",
      project: "Salesforce consulting, architecture & application team setup",
      status: "Finished",
      type: "Consulting",
      methods: ["Architecture", "Change & Adoption"],
      source: "notion",
    },
    {
      customer: "CALCO",
      project: "Salesforce consulting, architecture & application team setup",
      status: "Finished",
      type: "Consulting",
      methods: ["Architecture", "Change & Adoption"],
      source: "notion",
    },
    {
      customer: "buro Nexus",
      project: "Salesforce consulting, architecture & application team setup",
      status: "Finished",
      type: "Consulting",
      methods: ["Architecture", "Change & Adoption"],
      source: "notion",
    },
    {
      customer: "Bright Potentials",
      project: "Salesforce consulting, architecture & application team setup",
      status: "Finished",
      type: "Consulting",
      methods: ["Architecture", "Change & Adoption"],
      source: "notion",
    },
  ];

  var TRIANGLE_ROLES = {
    customer: {
      tag: "Customer",
      title: "The organisation buying change",
      intro: "Owns business outcomes, budget, and the people who must work differently.",
      owns: ["Business goals & executive sponsorship", "Operational teams & process reality", "Budget prioritisation", "Internal communication"],
    },
    vendor: {
      tag: "ATS technology provider",
      title: "The software vendor",
      intro: "Owns the product, licences, roadmap, and product expertise.",
      owns: ["Platform capabilities & releases", "Licence model & product support", "Standard implementation methodology", "Product training materials"],
    },
    integrator: {
      tag: "Integrator",
      title: "Implementation partner",
      intro: "Owns configuration, technical build, integrations, and deployment.",
      owns: ["Technical design & build", "Data migration & integrations", "Test execution & deployment", "Initial hypercare support"],
    },
    dse: {
      tag: "Digital Staffing Experts",
      title: "The objective centre",
      intro:
        "Independent experts bridging business and IT in staffing & recruitment. We coordinate customer, technology provider, and integrator — and own the grey zone.",
      owns: GREY_ZONE,
    },
  };

  /* ── DOM helpers ──────────────────────────────────────────────────── */

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function statusClass(s) {
    var key = s.toLowerCase().replace(/\s+/g, "-");
    if (key === "register") return "status-pill status-pill--register";
    return "status-pill status-pill--" + key;
  }

  /* ── Renderers ────────────────────────────────────────────────────── */

  function renderProblemTabs() {
    var tabs = $("#party-tabs");
    var panel = $("#problem-panel");
    if (!tabs || !panel) return;

    var parties = [
      { id: "customer", label: "Customer" },
      { id: "vendor", label: "ATS technology provider" },
      { id: "integrator", label: "Integrator" },
    ];

    parties.forEach(function (p, i) {
      var btn = el("button", "party-tab" + (i === 0 ? " is-active" : ""));
      btn.type = "button";
      btn.textContent = p.label;
      btn.setAttribute("data-party", p.id);
      tabs.appendChild(btn);
    });

    function show(party) {
      $all(".party-tab", tabs).forEach(function (t) {
        t.classList.toggle("is-active", t.getAttribute("data-party") === party);
      });
      panel.innerHTML = "";
      var list = el("div", "problem-list");
      PROBLEMS[party].forEach(function (item) {
        list.appendChild(
          el(
            "article",
            "problem-item",
            "<h3>" + item.title + "</h3><p>" + item.text + "</p>"
          )
        );
      });
      panel.appendChild(list);
    }

    $all(".party-tab", tabs).forEach(function (btn) {
      btn.addEventListener("click", function () {
        show(btn.getAttribute("data-party"));
      });
    });
    show("customer");
  }

  function formulaMarkup() {
    return (
      '<div class="formula-inline">' +
      '<span class="formula-line">Digital success =</span>' +
      '<span class="formula-line">(Organisation &amp; People × Process)' +
      '<sup class="formula-exp">Technology</sup></span></div>'
    );
  }

  function renderCycleLanes() {
    var lanes = $("#cycle-lanes");
    if (!lanes) return;

    var dse = el("div", "cycle-lane cycle-lane--dse");
    dse.style.gridColumn = "1 / -1";
    dse.style.gridRow = "1";
    dse.textContent = "Digital Staffing Experts";
    lanes.appendChild(dse);

    var vendorLabel = "(ATS) technology provider";
    [2, 6, 7].forEach(function (col) {
      var v = el("div", "cycle-lane cycle-lane--vendor");
      v.style.gridColumn = col + " / " + (col + 1);
      v.style.gridRow = "2";
      v.textContent = vendorLabel;
      lanes.appendChild(v);
    });

    var intg = el("div", "cycle-lane cycle-lane--integrator");
    intg.style.gridColumn = "4 / 8";
    intg.style.gridRow = "3";
    intg.textContent = "Integrator";
    lanes.appendChild(intg);
  }

  function renderCycle() {
    var track = $("#cycle-track");
    var detail = $("#cycle-detail");
    if (!track || !detail) return;

    renderCycleLanes();
    CYCLE.forEach(function (step, i) {
      var btn = el("button", "cycle-step" + (step.isGolive ? " is-golive" : ""));
      btn.type = "button";
      btn.setAttribute("data-idx", String(i));
      btn.innerHTML =
        '<div class="cycle-dot">' +
        (i + 1) +
        '</div><div class="cycle-step-label">' +
        step.label +
        "</div>";
      track.appendChild(btn);
    });

    function show(idx) {
      var s = CYCLE[idx];
      $all(".cycle-step", track).forEach(function (b, i) {
        b.classList.toggle("is-active", i === idx);
      });
      detail.innerHTML =
        "<h3>" +
        s.label +
        "</h3>" +
        '<div class="cycle-detail-grid">' +
        '<div class="cycle-detail-block">' +
        "<strong>What typically goes wrong</strong>" +
        "<p>" +
        s.typical +
        "</p>" +
        "</div>" +
        '<div class="cycle-detail-block">' +
        "<strong>Where DSE adds value</strong>" +
        "<p>" +
        s.dse +
        "</p>" +
        "</div>" +
        "</div>";
    }

    $all(".cycle-step", track).forEach(function (btn) {
      btn.addEventListener("click", function () {
        show(parseInt(btn.getAttribute("data-idx"), 10));
      });
    });
    show(5);
  }

  function renderTriangle() {
    var detail = $("#triangle-detail");
    if (!detail) return;

    function show(role) {
      var r = TRIANGLE_ROLES[role];
      var owns = r.owns.map(function (o) {
        return "<li>" + o + "</li>";
      }).join("");
      detail.innerHTML =
        '<span class="tag warn">' +
        r.tag +
        "</span>" +
        "<h3 style=\"margin:8px 0\">" +
        r.title +
        "</h3>" +
        "<p style=\"color:var(--muted);font-size:14px\">" +
        r.intro +
        "</p>" +
        "<ul style=\"font-size:14px;padding-left:18px\">" +
        owns +
        "</ul>";
      $all(".triangle-node").forEach(function (n) {
        var active = n.getAttribute("data-role") === role;
        n.classList.toggle("is-active", active);
        n.classList.toggle("is-dimmed", !active && role !== "dse");
      });
      if (role === "dse") {
        $all(".triangle-node").forEach(function (n) {
          n.classList.remove("is-dimmed");
        });
      }
    }

    $all(".triangle-node").forEach(function (n) {
      n.addEventListener("click", function () {
        show(n.getAttribute("data-role"));
      });
    });
    show("dse");
  }

  function renderValue() {
    var tabs = $("#value-tabs");
    var panel = $("#value-panel");
    if (!tabs || !panel) return;

    var audiences = [
      { id: "customer", label: "Customers" },
      { id: "vendor", label: "ATS technology providers" },
      { id: "integrator", label: "Integrators" },
    ];

    audiences.forEach(function (a, i) {
      var btn = el("button", "party-tab" + (i === 0 ? " is-active" : ""));
      btn.type = "button";
      btn.textContent = a.label;
      btn.setAttribute("data-audience", a.id);
      tabs.appendChild(btn);
    });

    function show(id) {
      $all(".party-tab", tabs).forEach(function (t) {
        t.classList.toggle("is-active", t.getAttribute("data-audience") === id);
      });
      var v = VALUE[id];
      var points = v.points
        .map(function (p) {
          return "<li>" + p + "</li>";
        })
        .join("");
      panel.innerHTML =
        '<article class="value-card-large">' +
        "<h3>For " +
        (id === "customer"
          ? "Customers"
          : id === "vendor"
            ? "ATS technology providers"
            : "Integrators") +
        "</h3>" +
        '<p class="value-tagline">' +
        v.tagline +
        "</p>" +
        (id === "customer" ? formulaMarkup() : "") +
        "<ul>" +
        points +
        "</ul></article>";
    }

    $all(".party-tab", tabs).forEach(function (btn) {
      btn.addEventListener("click", function () {
        show(btn.getAttribute("data-audience"));
      });
    });
    show("customer");
  }

  function renderMethodology() {
    var root = $("#method-map");
    if (!root) return;

    METHODOLOGY.forEach(function (lane) {
      var isChecklist = lane.id === "selection";
      var stepItems = isChecklist
        ? lane.steps.filter(function (s) {
            return s.n !== "00";
          })
        : lane.steps;
      var stepsClass = isChecklist ? "method-steps method-steps--checklist" : "method-steps";
      var steps = stepItems
        .map(function (s) {
          if (isChecklist) {
            return (
              '<div class="method-check-item">' +
              '<span class="method-check-box" aria-hidden="true"></span>' +
              '<div class="method-check-body"><strong>' +
              s.n +
              " " +
              s.t +
              "</strong><p>" +
              s.d +
              "</p></div></div>"
            );
          }
          return (
            '<div class="method-step-card"><strong>' +
            s.n +
            " " +
            s.t +
            "</strong>" +
            s.d +
            "</div>"
          );
        })
        .join("");
      root.appendChild(
        el(
          "div",
          "method-lane" + (isChecklist ? " method-lane--checklist" : ""),
          '<div class="method-lane-header"><div><h3>' +
            lane.title +
            "</h3><p>" +
            lane.lead +
            '</p></div></div><div class="' +
            stepsClass +
            '">' +
            steps +
            "</div>"
        )
      );
    });
  }

  function renderReferences(filter) {
    var grid = $("#ref-grid");
    if (!grid) return;

    var rows = PROJECTS.filter(function (p) {
      if (!filter || filter === "all") return true;
      return p.methods.indexOf(filter) >= 0;
    });

    grid.innerHTML = "";
    rows.forEach(function (p) {
      var tags = p.methods
        .map(function (m) {
          return '<span class="method-tag">' + m + "</span>";
        })
        .join("");
      grid.appendChild(
        el(
          "article",
          "ref-card",
          "<h3>" +
            p.customer +
            "</h3>" +
            "<p class=\"ref-card-project\">" +
            p.project +
            "</p>" +
            '<div class="method-tags">' +
            tags +
            "</div>"
        )
      );
    });
  }

  function initRefFilters() {
    var filters = $("#ref-filters");
    if (!filters) return;

    var opts = [
      { id: "all", label: "All" },
      { id: "Business & Digital Scan", label: "Scan" },
      { id: "Technology selection", label: "Selection" },
      { id: "Change & Adoption", label: "Adoption" },
      { id: "Project management", label: "PM" },
      { id: "Architecture", label: "Architecture" },
    ];

    opts.forEach(function (o, i) {
      var btn = el("button", "ref-filter" + (i === 0 ? " is-active" : ""));
      btn.type = "button";
      btn.textContent = o.label;
      btn.setAttribute("data-filter", o.id);
      filters.appendChild(btn);
    });

    $all(".ref-filter", filters).forEach(function (btn) {
      btn.addEventListener("click", function () {
        $all(".ref-filter", filters).forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        renderReferences(btn.getAttribute("data-filter"));
      });
    });

    renderReferences("all");
  }

  function initScrollSpy() {
    var links = $all(".nav-links a");
    var sections = links
      .map(function (a) {
        var id = a.getAttribute("href").slice(1);
        return { link: a, el: document.getElementById(id) };
      })
      .filter(function (s) {
        return s.el;
      });

    function onScroll() {
      var y = window.scrollY + 88;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.el.offsetTop <= y) current = s;
      });
      links.forEach(function (a) {
        a.classList.toggle("is-active", a === current.link);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function init() {
    renderProblemTabs();
    renderCycle();
    renderTriangle();
    renderValue();
    renderMethodology();
    initRefFilters();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

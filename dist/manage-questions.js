window.MANAGE_QUESTION_BANK = [
  {
    "id": "g01",
    "topic": "Workspaces",
    "type": "Choose ONE",
    "prompt": "A small BI team needs a shared place to create, collaborate on, and organize reports, dashboards, and semantic models. What should they create?",
    "options": [
      "A workspace",
      "A dashboard",
      "A data alert",
      "A report subscription"
    ],
    "answer": "A",
    "why": "A workspace is the collaborative container for Power BI content and team access roles.",
    "wrong": "A dashboard is a single-page consumption surface. Alerts and subscriptions notify users but do not organize build content.",
    "remember": "Build and collaborate on Power BI items → workspace.",
    "source": "manage"
  },
  {
    "id": "g02",
    "topic": "Workspace roles",
    "type": "Choose TWO",
    "prompt": "Regional analysts must consume workspace reports with row-level security enforced and must also use Analyze in Excel against the governed semantic model. They must not edit workspace content. Which TWO permissions or roles should you assign?",
    "options": [
      "Workspace Viewer.",
      "Build permission on the semantic model.",
      "Workspace Contributor.",
      "Workspace Member.",
      "Workspace Admin."
    ],
    "answer": "A and B",
    "why": "RLS is enforced for workspace Viewers, including Viewers who have Build permission. Build enables Analyze in Excel and creation of content from the semantic model without granting workspace write access.",
    "wrong": "Contributor, Member, and Admin have edit permissions; RLS is not enforced for them in the workspace.",
    "remember": "RLS consumer who also needs self-service analysis: Viewer + Build, not a write-capable workspace role.",
    "source": "manage"
  },
  {
    "id": "g03",
    "topic": "Workspace roles",
    "type": "Choose ONE",
    "prompt": "An analyst must create and edit reports in a workspace but should not manage workspace access or publish the organizational app. Which role is the best fit?",
    "options": [
      "Contributor",
      "Viewer",
      "Admin",
      "Fabric administrator"
    ],
    "answer": "A",
    "why": "Contributor supports creating and editing workspace content without the broader workspace management responsibility of Admin.",
    "wrong": "Viewer cannot create content. Admin has more rights than necessary. A Fabric administrator is a tenant-wide role.",
    "remember": "Give authors the least powerful workspace role that lets them build.",
    "source": "manage"
  },
  {
    "id": "g04",
    "topic": "Workspace roles",
    "type": "Choose ONE",
    "prompt": "Who can manage workspace access, settings, and the workspace itself?",
    "options": [
      "Workspace Admin",
      "Viewer",
      "Report consumer",
      "Semantic model Build user only"
    ],
    "answer": "A",
    "why": "The Admin role has full workspace management responsibilities, including access management and settings.",
    "wrong": "The other options do not manage the workspace as a whole.",
    "remember": "Workspace governance responsibility → Admin.",
    "source": "manage"
  },
  {
    "id": "g05",
    "topic": "Apps",
    "type": "Choose ONE",
    "prompt": "Finance has 300 consumers in three departments. Each department should receive a branded, read-only navigation experience containing a different subset of finished reports. Authors must continue working in the workspace without exposing drafts. What should you configure?",
    "options": [
      "Publish one Power BI app with separate audiences for the departments.",
      "Add every consumer to the workspace as Contributor.",
      "Share the workspace URL and hide draft report pages.",
      "Email a PBIX copy to each department."
    ],
    "answer": "A",
    "why": "An app separates curated consumption from workspace authoring, and audiences can present different app content to different groups.",
    "wrong": "Contributor grants edit capability. A workspace exposes collaborative content rather than a curated package. PBIX distribution creates unmanaged copies.",
    "remember": "Many consumers + curated content + group-specific navigation → app audiences.",
    "source": "manage"
  },
  {
    "id": "g06",
    "topic": "Apps",
    "type": "Choose TWO",
    "prompt": "A published app has Sales Leadership and Store Managers audiences. Which TWO capabilities can app audiences provide?",
    "options": [
      "Show different app content to different groups.",
      "Control which groups can access the app.",
      "Make every audience a workspace Admin.",
      "Replace row-level security automatically.",
      "Turn Import models into DirectQuery."
    ],
    "answer": "A and B",
    "why": "App audiences control access and can tailor which content each group sees. They do not replace data security such as RLS.",
    "wrong": "Workspace Admin, automatic RLS, and storage mode changes are unrelated to app audiences.",
    "remember": "Apps distribute the right content to the right consumer audience.",
    "source": "manage"
  },
  {
    "id": "g07",
    "topic": "Publishing items",
    "type": "Choose TWO",
    "prompt": "A PBIX report and semantic model have been corrected in Desktop. The workspace already contains the earlier version, and consumers access the report through a published app. Which TWO actions make the corrected version available to app consumers?",
    "options": [
      "Publish the PBIX to the existing workspace and replace the existing items.",
      "Create a dashboard alert.",
      "Update the app after the workspace report is replaced.",
      "Add consumers as workspace Contributors.",
      "Export the PBIX to PDF."
    ],
    "answer": "A and C",
    "why": "Publishing replaces the workspace items. Because an app is a published distribution package, the app must then be updated for consumers to receive the revised content.",
    "wrong": "Alerts, workspace roles, and PDF export do not update the report and semantic model delivered through the app.",
    "remember": "Desktop → publish to workspace; workspace change → update the app.",
    "source": "manage"
  },
  {
    "id": "g08",
    "topic": "Updating apps",
    "type": "Choose ONE",
    "prompt": "An app audience must not have access to a confidential report. The report is currently included for that audience but hidden in the app navigation. Security testing shows that users can still open it with a direct link. What should you do?",
    "options": [
      "Remove the report from that audience’s accessible app content and update the app.",
      "Keep it hidden because navigation visibility is a security boundary.",
      "Add the audience users as workspace Viewers.",
      "Create a bookmark that hides the report page."
    ],
    "answer": "A",
    "why": "Hiding app navigation changes discoverability, not authorization. Remove the item from the audience’s accessible content and publish the app update.",
    "wrong": "A hidden navigation item may remain reachable by direct link. Workspace access broadens access. Bookmarks do not secure report items.",
    "remember": "Visibility is not permission; remove audience access when users must not open the item.",
    "source": "manage"
  },
  {
    "id": "g09",
    "topic": "Dashboards",
    "type": "Choose ONE",
    "prompt": "An executive wants one single-page canvas of important KPI tiles, each of which can link back to a supporting report. What should you create?",
    "options": [
      "A dashboard",
      "A dataflow",
      "A calculation group",
      "A workspace role"
    ],
    "answer": "A",
    "why": "A dashboard is a single-page collection of tiles, often pinned from report visuals, intended for at-a-glance monitoring.",
    "wrong": "Dataflows transform data, calculation groups transform measures, and roles control access.",
    "remember": "Single-page KPI tile experience → dashboard.",
    "source": "manage"
  },
  {
    "id": "g10",
    "topic": "Alerts and subscriptions",
    "type": "Match EACH requirement",
    "prompt": "Match each notification requirement to the appropriate Power BI feature.",
    "options": [
      "1. Notify a manager only when a dashboard KPI exceeds 95%.",
      "2. Email executives a report snapshot every Monday whether or not values cross a threshold."
    ],
    "answer": "1 = Data alert; 2 = Subscription",
    "why": "A data alert is threshold/event driven on supported dashboard tiles. A subscription is time driven and sends report or dashboard content on a schedule.",
    "wrong": "Reversing them would either send routine mail only after a threshold or use an event feature for a fixed weekly delivery.",
    "remember": "Alert = condition; subscription = schedule.",
    "source": "manage"
  },
  {
    "id": "g11",
    "topic": "Subscriptions",
    "type": "Choose ONE",
    "prompt": "Executives need a report snapshot and link delivered to their inbox every Monday morning whether or not a threshold is crossed. What should you configure?",
    "options": [
      "An email subscription",
      "A data alert",
      "A row-level security role",
      "A calculation group"
    ],
    "answer": "A",
    "why": "An email subscription sends a report or dashboard on a schedule. It is different from a data alert, which triggers after data crosses a rule threshold.",
    "wrong": "RLS controls data visibility and calculation groups change measures.",
    "remember": "Scheduled delivery → subscription; threshold event → alert.",
    "source": "manage"
  },
  {
    "id": "g12",
    "topic": "Endorsement",
    "type": "Choose ONE",
    "prompt": "A report owner has write permission and wants colleagues to discover a useful report, but the organization has not completed its formal quality review. Which endorsement should the owner apply?",
    "options": [
      "Promoted.",
      "Certified.",
      "A sensitivity label named Public.",
      "Featured on Home as a substitute for endorsement."
    ],
    "answer": "A",
    "why": "Promoted is the appropriate owner-applied signal that content is useful. Certified indicates formal organizational approval by authorized certifiers.",
    "wrong": "Certification requires the governed review process. Sensitivity labels classify data and do not endorse quality. Featured placement is not an endorsement level.",
    "remember": "Promoted = recommended by the owner; Certified = formally approved by authorized reviewers.",
    "source": "manage"
  },
  {
    "id": "g13",
    "topic": "Endorsement",
    "type": "Choose ONE",
    "prompt": "A semantic model must be marked as authoritative and approved against the organization’s quality standards. Who can certify it?",
    "options": [
      "An authorized reviewer designated by the Power BI administrator.",
      "Any report Viewer.",
      "Any user who has Read permission.",
      "Only an external guest user."
    ],
    "answer": "A",
    "why": "Certification is a governed endorsement that only authorized reviewers can apply.",
    "wrong": "Read and Viewer permissions do not grant certification authority.",
    "remember": "Certification is controlled by the organization, not self-declared.",
    "source": "manage"
  },
  {
    "id": "g14",
    "topic": "Gateways",
    "type": "Choose TWO",
    "prompt": "A semantic model imports from an on-premises SQL Server. A gateway cluster is already online, but scheduled refresh reports that the data source cannot be found. Which TWO configurations should you verify?",
    "options": [
      "A gateway data-source entry matches the server and database used by the model.",
      "The semantic model is mapped to that gateway data source with valid credentials.",
      "The report has a mobile layout.",
      "The workspace app has been republished.",
      "The SQL table is pinned to a dashboard."
    ],
    "answer": "A and B",
    "why": "The service must match the model connection to a configured gateway data source, and that mapping must use valid source credentials.",
    "wrong": "Report layout, app publication, and dashboard tiles do not establish on-premises connectivity.",
    "remember": "Gateway refresh needs an online gateway, a matching data-source definition, mapping, and valid credentials.",
    "source": "manage"
  },
  {
    "id": "g15",
    "topic": "Gateways",
    "type": "Choose ONE",
    "prompt": "A semantic model imports data only from SharePoint Online and Azure SQL Database, both reachable as cloud services with supported credentials. Is an on-premises data gateway normally required?",
    "options": [
      "No, a gateway is normally not required for these cloud sources.",
      "Yes, every scheduled refresh requires a gateway.",
      "Yes, but only for report consumers.",
      "No, because scheduled refresh cannot be used with cloud data."
    ],
    "answer": "A",
    "why": "Cloud sources that the Power BI service can access directly normally do not need an on-premises gateway.",
    "wrong": "Gateways are not a universal refresh requirement, and cloud sources can be refreshed.",
    "remember": "Gateway need depends on where and how the source is reachable.",
    "source": "manage"
  },
  {
    "id": "g16",
    "topic": "Scheduled refresh",
    "type": "Choose ONE",
    "prompt": "An Import semantic model combines Azure SQL and an on-premises file share. The model owner must configure a nightly refresh after publication. Where should the owner configure the schedule and the source connections?",
    "options": [
      "In the semantic model settings in the Power BI service, including gateway mapping for the file share.",
      "In the report Selection pane.",
      "In the app audience navigation.",
      "In a dashboard data alert."
    ],
    "answer": "A",
    "why": "Scheduled refresh and data-source credentials are semantic-model settings. The on-premises file share also requires the appropriate gateway connection.",
    "wrong": "Report, app, and dashboard settings do not configure semantic-model refresh connections.",
    "remember": "Refresh belongs to the semantic model; on-premises sources additionally need gateway mapping.",
    "source": "manage"
  },
  {
    "id": "g17",
    "topic": "Scheduled refresh",
    "type": "Choose ONE",
    "prompt": "A scheduled refresh fails with invalid credentials after the source password changes. What should you update?",
    "options": [
      "The semantic model data-source credentials in the service.",
      "The report page size.",
      "The app audience label.",
      "The DAX measure format."
    ],
    "answer": "A",
    "why": "A password change invalidates stored source credentials, so update the connection credentials in the semantic model settings.",
    "wrong": "Report design, app labeling, and measure formatting do not authenticate to the source.",
    "remember": "Refresh authentication failure → check semantic model credentials.",
    "source": "manage"
  },
  {
    "id": "g18",
    "topic": "Semantic model access",
    "type": "Choose ONE",
    "prompt": "A user can already view a report delivered through an app. The user must now create a separate report and an Excel PivotTable from the app’s semantic model without receiving workspace edit rights. What additional permission is required?",
    "options": [
      "Build permission on the semantic model.",
      "Workspace Contributor.",
      "Reshare permission on the report only.",
      "Workspace Admin."
    ],
    "answer": "A",
    "why": "Build permission enables creating new content from a semantic model, including Power BI reports and Analyze in Excel, without granting workspace authoring rights.",
    "wrong": "Contributor and Admin grant unnecessary workspace write access. Reshare permits redistribution but does not provide the required model-building capability.",
    "remember": "Consume an existing report → Read; create from its model → Build.",
    "source": "manage"
  },
  {
    "id": "g19",
    "topic": "Semantic model access",
    "type": "Choose ONE",
    "prompt": "A user can view an existing shared report but should not create new reports from its semantic model. Which approach is most appropriate?",
    "options": [
      "Grant report access without granting Build permission.",
      "Make the user a workspace Admin.",
      "Grant Build and Contributor permissions.",
      "Publish the PBIX to the user."
    ],
    "answer": "A",
    "why": "Report access enables consumption. Withholding Build prevents the intended self-service reuse permission.",
    "wrong": "Admin, Contributor, Build, and a PBIX copy grant more capability than required.",
    "remember": "Consume a report without authoring → do not grant Build.",
    "source": "manage"
  },
  {
    "id": "g20",
    "topic": "Item-level access",
    "type": "Choose TWO",
    "prompt": "A contractor must view one specific report with RLS applied. The contractor must not browse the workspace or build new reports from the model. Which TWO access choices best meet the requirement?",
    "options": [
      "Grant direct access to the specific report.",
      "Leave Build permission on the semantic model unassigned.",
      "Add the contractor as workspace Viewer.",
      "Grant Build permission.",
      "Add the contractor to the app audience that contains every workspace report."
    ],
    "answer": "A and B",
    "why": "Directly sharing the report limits the visible artifact and supplies the access needed to consume its data. Leaving Build unassigned prevents the contractor from creating new reports from the semantic model; RLS still filters the rows shown.",
    "wrong": "Workspace or broad app access exposes more content. Build enables self-service creation that the requirement forbids.",
    "remember": "For view-only sharing, grant the report and omit Build unless self-service authoring is required.",
    "source": "manage"
  },
  {
    "id": "g21",
    "topic": "Row-level security",
    "type": "Choose ONE",
    "prompt": "A Sales table has a Region column. Every user in the Regional Managers RLS role must see only rows where Sales[Region] equals their assigned region. What is the purpose of the RLS role?",
    "options": [
      "Filter data rows for role members when they view the model through supported consumption access.",
      "Hide report pages from all users.",
      "Grant Build permission.",
      "Refresh the semantic model nightly."
    ],
    "answer": "A",
    "why": "Row-level security applies DAX filters to restrict which rows a role member can see. It is data security, not report layout or refresh configuration.",
    "wrong": "Pages, Build, and refresh solve different problems.",
    "remember": "RLS controls which data rows a consumer can see.",
    "source": "manage"
  },
  {
    "id": "g22",
    "topic": "Row-level security",
    "type": "Choose ONE",
    "prompt": "You define an RLS role in Power BI Desktop. What must happen after publishing before users are restricted in the Power BI service?",
    "options": [
      "Assign users or a security group to the role in the semantic model security settings.",
      "Create a dashboard from the report.",
      "Make every user a workspace Admin.",
      "Export the model to Excel."
    ],
    "answer": "A",
    "why": "Role rules define the filter, but service membership determines which users receive that filter after publication.",
    "wrong": "Dashboards, Admin roles, and Excel export do not assign RLS membership.",
    "remember": "RLS requires both a rule and the right members.",
    "source": "manage"
  },
  {
    "id": "g23",
    "topic": "Row-level security",
    "type": "Choose ONE",
    "prompt": "Regional managers are assigned to an RLS role. One manager is also a workspace Contributor and reports seeing every region. What change should you make so the manager is restricted by RLS while consuming the workspace report?",
    "options": [
      "Change the manager’s workspace role to Viewer.",
      "Keep Contributor and add a second RLS role.",
      "Change the manager to Member.",
      "Grant Admin and remove Build."
    ],
    "answer": "A",
    "why": "RLS is enforced for workspace Viewers. Admin, Member, and Contributor have edit permissions for the semantic model, so RLS does not restrict them in the workspace.",
    "wrong": "Adding roles does not overcome write-capable workspace permissions. Member and Admin also bypass RLS enforcement in this context.",
    "remember": "If workspace consumers must be restricted by RLS, use Viewer—not a role with edit rights.",
    "source": "manage"
  },
  {
    "id": "g24",
    "topic": "Row-level security",
    "type": "Choose TWO",
    "prompt": "Why is using a Microsoft Entra security group for RLS role membership often preferable to adding people one by one?",
    "options": [
      "Membership can be managed centrally.",
      "The same group can be reused for other access controls.",
      "It changes the DAX filter automatically to allow all data.",
      "It makes every user a workspace Admin.",
      "It removes the need to publish the model."
    ],
    "answer": "A and B",
    "why": "Security groups centralize membership and can be reused for workspace, app, and security administration patterns. The RLS filter itself remains defined by the role.",
    "wrong": "Groups do not grant Admin automatically, bypass filtering, or remove publication requirements.",
    "remember": "Groups simplify membership management; they do not replace security design.",
    "source": "manage"
  },
  {
    "id": "g25",
    "topic": "Sensitivity labels",
    "type": "Choose ONE",
    "prompt": "A report contains confidential payroll information. Your organization uses Microsoft Information Protection labels to classify and protect sensitive data. What should you apply?",
    "options": [
      "An appropriate sensitivity label.",
      "A promoted endorsement only.",
      "A dashboard alert.",
      "A calculation group."
    ],
    "answer": "A",
    "why": "Sensitivity labels classify and help protect sensitive Power BI content according to organizational policy.",
    "wrong": "Promotion signals usefulness, while alerts and calculation groups are unrelated to information protection.",
    "remember": "Data classification and protection requirement → sensitivity label.",
    "source": "manage"
  },
  {
    "id": "g26",
    "topic": "Distribution methods",
    "type": "Choose ONE",
    "prompt": "A single colleague needs quick access to a draft report for feedback. The report is not a finalized organizational package. What is the most direct distribution method?",
    "options": [
      "Share the specific report with that colleague.",
      "Publish an enterprise-wide app audience.",
      "Add the colleague as workspace Admin.",
      "Email the PBIX as the only controlled option."
    ],
    "answer": "A",
    "why": "Direct report sharing is appropriate for a narrow, specific sharing need. An app is more suitable for a curated broad audience.",
    "wrong": "Admin is excessive, and emailing PBIX creates unmanaged copies.",
    "remember": "One person, one draft report → share the report with minimal access.",
    "source": "manage"
  },
  {
    "id": "g27",
    "topic": "Case study: Adventure Works Retail",
    "type": "Choose TWO",
    "prompt": "Adventure Works must distribute a curated report package to Sales employees without workspace editing rights. Regional managers must see only their own region, but two analysts also need Analyze in Excel while remaining subject to RLS. Which TWO actions best satisfy the requirements?",
    "options": [
      "Publish an app to the Sales audience and keep consumers out of write-capable workspace roles.",
      "Assign managers and analysts to the appropriate RLS group, granting Build only to the two analysts.",
      "Add every Sales employee as workspace Contributor.",
      "Grant Build to every app consumer.",
      "Make regional managers workspace Members so they can see the app."
    ],
    "answer": "A and B",
    "why": "The app provides curated consumption without workspace editing. RLS group membership restricts regions, and targeted Build supports Analyze in Excel for only the analysts while RLS remains enforced for consumers.",
    "wrong": "Contributor and Member are write-capable roles where RLS is not enforced. Granting Build to everyone exceeds the requirement.",
    "remember": "Separate distribution, row security, and self-service permissions; grant each only where required.",
    "source": "manage",
    "caseStudy": {
      "title": "Case study: Adventure Works Retail",
      "intro": "Adventure Works has a central BI team that builds reports in a workspace. Sales employees should consume a polished set of reports but must not edit workspace content. Regional managers must see only their own region’s sales. The source database is on-premises SQL Server, and the semantic model must refresh nightly."
    }
  },
  {
    "id": "g28",
    "topic": "Case study: Adventure Works Retail",
    "type": "Choose ONE",
    "prompt": "Using the Adventure Works scenario, what is needed to refresh the on-premises SQL Server data nightly after the model is published?",
    "options": [
      "Configure an on-premises data gateway, source credentials, and scheduled refresh for the semantic model.",
      "Pin the report to a dashboard.",
      "Add a data alert to a card.",
      "Publish a new app every night."
    ],
    "answer": "A",
    "why": "The gateway reaches the on-premises source, credentials authenticate, and the semantic model schedule runs the recurring refresh.",
    "wrong": "Dashboards, alerts, and app publication do not move data from the source into the model.",
    "remember": "On-premises scheduled refresh = gateway + credentials + semantic model schedule.",
    "source": "manage",
    "caseStudy": {
      "title": "Case study: Adventure Works Retail",
      "intro": "Adventure Works has a central BI team that builds reports in a workspace. Sales employees should consume a polished set of reports but must not edit workspace content. Regional managers must see only their own region’s sales. The source database is on-premises SQL Server, and the semantic model must refresh nightly."
    }
  },
  {
    "id": "g29",
    "topic": "Data alerts and RLS",
    "type": "Choose ONE",
    "prompt": "A regional manager creates a data alert on a dashboard KPI tile. How is the alert evaluated when RLS applies?",
    "options": [
      "Against the data the manager is authorized to see.",
      "Against all organization data regardless of RLS.",
      "Only after an app is republished.",
      "Only for report table visuals."
    ],
    "answer": "A",
    "why": "Data alerts respect RLS, so the condition is evaluated using the data available to the user who created the alert.",
    "wrong": "RLS is not bypassed by alerts. Alerts work on eligible dashboard tiles, not report tables.",
    "remember": "Alerts respect the creator’s data access context.",
    "source": "manage"
  },
  {
    "id": "g30",
    "topic": "Workspace configuration",
    "type": "Choose ONE",
    "prompt": "You need to add a Microsoft Entra security group to a workspace so its members can view reports but not edit content. Which action is correct?",
    "options": [
      "Add the group to workspace access as Viewer.",
      "Add the group as Admin.",
      "Grant every member Build permission only.",
      "Create a dashboard tile for the group."
    ],
    "answer": "A",
    "why": "Workspace access supports assigning security groups to a role. Viewer gives the requested consumption-only workspace access.",
    "wrong": "Admin is excessive, Build alone is not workspace access, and tiles do not assign permissions.",
    "remember": "Use groups with the least-privilege workspace role.",
    "source": "manage"
  }
];

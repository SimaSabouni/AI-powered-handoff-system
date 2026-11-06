/* All interface strings and project content, in English and Arabic.
   Structure and labels follow the low-fidelity wireframe one-to-one;
   only placeholders (Task A, File A, Decision A ...) were given real values. */

window.UI = {
  en: {
    project: "Website migration",
    draft: "Draft", shared: "Shared", readOnly: "Read-only",
    contributor: "Contributor", receiver: "Receiver",
    langLabel: "Language", roleLabel: "Role",
    nav: { overview: "Project Overview", handover: "Handover", decisions: "Decisions & Evidence", files: "Files & Versions", questions: "Questions & Clarifications", review: "Review & Share" },
    // Project Overview
    projectSummary: "Project summary", taskProgress: "Task progress", projectTeam: "Project team", complete: "Complete", verified: "Verified",
    taskTable: "Task table", colTask: "Task", colOwner: "Owner", colProgress: "Progress", colVerification: "Verification", colFile: "File / v.",
    needsAttention: "Needs attention", unverifiedTask: "Unverified task", blocker: "Blocker",
    nextSteps: "Next steps", checkEvidence: "Check evidence", resumePending: "Resume pending work",
    // statuses
    st: { complete: "Complete", pending: "Pending", blocked: "Blocked", verified: "Verified", needsReview: "Needs review", unverified: "Unverified", disputed: "Disputed", noEvidence: "No evidence", current: "Current", earlier: "Earlier" },
    // Decisions
    decisions: "Decisions", rationale: "Rationale", verificationStatus: "Verification status", evidence: "Evidence", sourceVersion: "Source / version", sourceOwner: "Source owner", sourceDate: "Source date", sourceExcerpt: "Source excerpt",
    uncertaintyDetails: "Uncertainty details", informationType: "Information type", reason: "Why this is uncertain", impact: "Potential impact", resolution: "How to resolve", verificationRecord: "Verification record", conflictingViews: "Conflicting views",
    // Files
    fileList: "File list", fileDetails: "File details", currentVersion: "Current version", versionHistory: "Version history", comparison: "Comparison",
    // Questions
    questionList: "Question list", discussionThread: "Discussion thread", reply: "Reply", writeReply: "Write a reply", send: "Send",
    restrictedAccess: "Restricted access", credentialsExcluded: "Login credentials are not included in the handover.", requestAccess: "Request authorized access", accessRequestSent: "Access request sent",
    // Handover
    editorTitle: "Handover Editor", readerTitle: "Handover Reader",
    sections: "Sections", editableContent: "Editable content", references: "References", fileVersion: "File / version", evidenceLink: "Evidence link",
    aiSuggestion: "AI suggestion", aiGenerated: "AI-generated", insert: "Insert", dismiss: "Dismiss", basedOn: "Based on",
    save: "Save", reviewBtn: "Review", saved: "Handover saved",
    supportingPassage: "Supporting passage", supportingEvidence: "Supporting evidence", notAttached: "Not attached", inspectSource: "Inspect source", askQuestion: "Ask a question",
    originalLanguage: "Original", viewingLanguage: "Viewing", englishLanguage: "English", arabicTranslation: "Arabic translation",
    sec: { summary: "Summary", completed: "Completed work", remaining: "Remaining work", issues: "Open issues" },
    readerHeading: { summary: "Project summary", completed: "Completed work", remaining: "Remaining work", issues: "Open issues" },
    // Review
    reviewTitle: "Review & Share", readiness: "Handover readiness", itemsNeedReview: "2 items need review",
    aiReview: "AI review", suggestionToReview: "Suggestion to review", verificationOverview: "Verification overview",
    privacy: "Privacy settings", hidePrivate: "Hide private notes", allowAI: "Allow AI to use restricted files",
    preview: "Preview", share: "Share", sharedToast: "Handover shared with Daniel K.",
    tasks1: "1 task", bold: "Bold", italic: "Italic", bullets: "Bulleted list", attach: "Attach reference"
  },
  ar: {
    project: "ترحيل الموقع الإلكتروني",
    draft: "مسودة", shared: "تمت المشاركة", readOnly: "للقراءة فقط",
    contributor: "المساهم", receiver: "المستلم",
    langLabel: "اللغة", roleLabel: "الدور",
    nav: { overview: "نظرة عامة على المشروع", handover: "التسليم", decisions: "القرارات والأدلة", files: "الملفات والإصدارات", questions: "الأسئلة والتوضيحات", review: "المراجعة والمشاركة" },
    projectSummary: "ملخص المشروع", taskProgress: "تقدّم المهام", projectTeam: "فريق المشروع", complete: "مكتملة", verified: "تم التحقق",
    taskTable: "جدول المهام", colTask: "المهمة", colOwner: "المسؤول", colProgress: "التقدّم", colVerification: "التحقق", colFile: "الملف / الإصدار",
    needsAttention: "يحتاج إلى انتباه", unverifiedTask: "مهمة لم يُتحقق منها", blocker: "عائق",
    nextSteps: "الخطوات التالية", checkEvidence: "مراجعة الأدلة", resumePending: "استئناف العمل المعلّق",
    st: { complete: "مكتملة", pending: "قيد الانتظار", blocked: "متوقفة", verified: "تم التحقق", needsReview: "تحتاج مراجعة", unverified: "لم يُتحقق منها", disputed: "موضع خلاف", noEvidence: "لا يوجد دليل", current: "الحالي", earlier: "سابق" },
    decisions: "القرارات", rationale: "المبررات", verificationStatus: "حالة التحقق", evidence: "الأدلة", sourceVersion: "المصدر / الإصدار", sourceOwner: "مالك المصدر", sourceDate: "تاريخ المصدر", sourceExcerpt: "مقتطف من المصدر",
    uncertaintyDetails: "تفاصيل عدم اليقين", informationType: "نوع المعلومة", reason: "سبب عدم اليقين", impact: "التأثير المحتمل", resolution: "كيفية الحل", verificationRecord: "سجل التحقق", conflictingViews: "الآراء المتعارضة",
    fileList: "قائمة الملفات", fileDetails: "تفاصيل الملف", currentVersion: "الإصدار الحالي", versionHistory: "سجل الإصدارات", comparison: "المقارنة",
    questionList: "قائمة الأسئلة", discussionThread: "سلسلة النقاش", reply: "رد", writeReply: "اكتب ردًا", send: "إرسال",
    restrictedAccess: "وصول مقيّد", credentialsExcluded: "بيانات تسجيل الدخول غير مضمنة في التسليم.", requestAccess: "طلب وصول مصرح به", accessRequestSent: "تم إرسال طلب الوصول",
    editorTitle: "محرر التسليم", readerTitle: "عارض التسليم",
    sections: "الأقسام", editableContent: "المحتوى القابل للتحرير", references: "المراجع", fileVersion: "الملف / الإصدار", evidenceLink: "رابط الدليل",
    aiSuggestion: "اقتراح الذكاء الاصطناعي", aiGenerated: "مُنشأ بالذكاء الاصطناعي", insert: "إدراج", dismiss: "تجاهل", basedOn: "استنادًا إلى",
    save: "حفظ", reviewBtn: "مراجعة", saved: "تم حفظ التسليم",
    supportingPassage: "المقطع الداعم", supportingEvidence: "الدليل الداعم", notAttached: "غير مرفق", inspectSource: "فحص المصدر", askQuestion: "اطرح سؤالًا",
    originalLanguage: "الأصل", viewingLanguage: "العرض", englishLanguage: "الإنجليزية", arabicTranslation: "ترجمة عربية",
    sec: { summary: "الملخص", completed: "العمل المنجز", remaining: "العمل المتبقي", issues: "المشكلات المفتوحة" },
    readerHeading: { summary: "ملخص المشروع", completed: "العمل المنجز", remaining: "العمل المتبقي", issues: "المشكلات المفتوحة" },
    reviewTitle: "المراجعة والمشاركة", readiness: "جاهزية التسليم", itemsNeedReview: "عنصران يحتاجان إلى مراجعة",
    aiReview: "مراجعة الذكاء الاصطناعي", suggestionToReview: "اقتراح للمراجعة", verificationOverview: "نظرة عامة على التحقق",
    privacy: "إعدادات الخصوصية", hidePrivate: "إخفاء الملاحظات الخاصة", allowAI: "السماح للذكاء الاصطناعي باستخدام الملفات المقيّدة",
    preview: "معاينة", share: "مشاركة", sharedToast: "تمت مشاركة التسليم مع دانيال ك.",
    tasks1: "مهمة واحدة", bold: "غامق", italic: "مائل", bullets: "قائمة نقطية", attach: "إرفاق مرجع"
  }
};

/* Project content. Each text value is { en, ar }. */
window.DATA = {
  people: {
    sr: { en: "Sara R.", ar: "سارة ر.", initials: "SR", cls: "av-sr" },
    dk: { en: "Daniel K.", ar: "دانيال ك.", initials: "DK", cls: "av-dk" }
  },
  summary: {
    en: "Moving the company website from the old CMS to the new platform. The content audit and redirect map are done; redirect testing and the launch sign-off remain.",
    ar: "نقل موقع الشركة من نظام إدارة المحتوى القديم إلى المنصة الجديدة. اكتمل تدقيق المحتوى وخريطة التحويلات، ويتبقى اختبار التحويلات واعتماد الإطلاق."
  },
  // Task A-D from the wireframe, with the same owners and statuses
  tasks: [
    { name: { en: "Content audit", ar: "تدقيق المحتوى" }, owner: "sr", progress: "complete", verification: "verified", file: "audit.xlsx / v2" },
    { name: { en: "Redirect map", ar: "خريطة التحويلات" }, owner: "dk", progress: "complete", verification: "needsReview", file: "redirects.csv / v1" },
    { name: { en: "Redirect testing", ar: "اختبار التحويلات" }, owner: "sr", progress: "pending", verification: "unverified", file: "-" },
    { name: { en: "Launch sign-off", ar: "اعتماد الإطلاق" }, owner: "dk", progress: "blocked", verification: "unverified", file: "-" }
  ],
  // Decision A-C
  decisions: [
    { title: { en: "Use 301 redirects", ar: "استخدام تحويلات 301" },
      rationale: { en: "Permanent redirects keep search rankings and old bookmarks working after launch. Temporary redirects would have to be replaced later.", ar: "تحافظ التحويلات الدائمة على ترتيب البحث والإشارات المرجعية القديمة بعد الإطلاق. أما التحويلات المؤقتة فسيلزم استبدالها لاحقًا." },
      status: "needsReview", source: "redirects.csv / v1", sourceOwner: "dk", sourceDate: { en: "30 Oct", ar: "30 أكتوبر" },
      uncertainty: {
        type: { en: "Evidence-backed proposal", ar: "اقتراح مدعوم بأدلة" },
        reason: { en: "The redirect map has not yet been tested on the staging site.", ar: "لم تُختبر خريطة التحويلات على موقع الاختبار بعد." },
        impact: { en: "Incorrect redirects could break old links or reduce search visibility after launch.", ar: "قد تؤدي التحويلات غير الصحيحة إلى تعطّل الروابط القديمة أو انخفاض الظهور في نتائج البحث بعد الإطلاق." },
        resolution: { en: "Test a representative sample on staging, then approve the redirect map.", ar: "اختبار عينة ممثلة على موقع الاختبار، ثم اعتماد خريطة التحويلات." },
        verification: { en: "Review assigned to Sara R.; method: staging redirect test.", ar: "أُسندت المراجعة إلى سارة ر.؛ الأسلوب: اختبار التحويلات على موقع الاختبار." }
      },
      excerpt: { en: "/about-us → /company/about, 301\n/news/2023 → /newsroom, 301", ar: "/about-us → /company/about, 301\n/news/2023 → /newsroom, 301" } },
    { title: { en: "Keep URL structure", ar: "الإبقاء على بنية الروابط" },
      rationale: { en: "Most pages keep their current path, so only 27 pages need a redirect. This lowers the testing effort before launch.", ar: "تحتفظ معظم الصفحات بمسارها الحالي، لذا تحتاج 27 صفحة فقط إلى تحويل. وهذا يقلل جهد الاختبار قبل الإطلاق." },
      status: "verified", source: "audit.xlsx / v2", sourceOwner: "sr", sourceDate: { en: "3 Nov", ar: "3 نوفمبر" },
      uncertainty: {
        type: { en: "Verified evidence", ar: "دليل تم التحقق منه" },
        reason: { en: "No remaining uncertainty. The latest audit confirms the affected page counts.", ar: "لا يوجد عدم يقين متبقٍ. يؤكد أحدث تدقيق أعداد الصفحات المتأثرة." },
        impact: { en: "Low. The verified counts define the redirect scope.", ar: "منخفض. تحدد الأعداد المتحقق منها نطاق التحويلات." },
        resolution: { en: "No further action required unless the page inventory changes.", ar: "لا يلزم إجراء إضافي ما لم تتغير قائمة الصفحات." },
        verification: { en: "Verified by Daniel K. through a manual audit review on 3 Nov.", ar: "تحقق منه دانيال ك. من خلال مراجعة يدوية للتدقيق في 3 نوفمبر." }
      },
      excerpt: { en: "Pages kept: 187\nPages redirected: 27", ar: "الصفحات المُبقاة: 187\nالصفحات المحوّلة: 27" } },
    { title: { en: "Freeze content before launch", ar: "تجميد المحتوى قبل الإطلاق" },
      rationale: { en: "No page edits in the final week, so the redirect tests run against content that will not change.", ar: "لا تعديلات على الصفحات في الأسبوع الأخير، حتى تُجرى اختبارات التحويل على محتوى لن يتغير." },
      status: "disputed", source: "launch-plan.docx / v1", sourceOwner: "sr", sourceDate: { en: "14 Oct", ar: "14 أكتوبر" },
      uncertainty: {
        type: { en: "Planning assumption", ar: "افتراض تخطيطي" },
        reason: { en: "The launch plan proposes a five-working-day freeze, while the communications team has suggested three days. The final period has not been approved.", ar: "تقترح خطة الإطلاق تجميد المحتوى لمدة خمسة أيام عمل، بينما اقترح فريق الاتصال ثلاثة أيام. لم تُعتمد المدة النهائية بعد." },
        impact: { en: "Redirect testing may start too early or leave too little time before launch.", ar: "قد يبدأ اختبار التحويلات مبكرًا جدًا أو لا يترك وقتًا كافيًا قبل الإطلاق." },
        resolution: { en: "Confirm the freeze period at the launch meeting and update the launch plan.", ar: "تأكيد مدة التجميد في اجتماع الإطلاق وتحديث خطة الإطلاق." },
        verification: { en: "Not verified; no final approver or verification method is recorded.", ar: "لم يتم التحقق؛ لم يُسجل معتمد نهائي أو أسلوب للتحقق." },
        conflicts: [
          { en: "Sara R.: freeze content for 5 working days.", ar: "سارة ر.: تجميد المحتوى لمدة 5 أيام عمل." },
          { en: "Communications team: 3 working days should be sufficient.", ar: "فريق الاتصال: يُفترض أن تكون 3 أيام عمل كافية." }
        ]
      },
      excerpt: { en: "Content freeze starts 5 working days before go-live.", ar: "يبدأ تجميد المحتوى قبل 5 أيام عمل من الإطلاق." } }
  ],
  // File A-C
  files: [
    { name: "audit.xlsx", icon: "document_table_20_regular", current: "v2",
      meta: { en: "Updated 3 Nov by Sara R.", ar: "حُدّث في 3 نوفمبر بواسطة سارة ر." },
      versions: [ { v: "v2", st: "current" }, { v: "v1", st: "earlier" } ],
      compare: {
        v1: [ { en: "Pages audited: 186", ar: "الصفحات المدققة: 186" }, { en: "Pages to remove: 31", ar: "صفحات للحذف: 31" }, { en: "Reviewer: none", ar: "المراجع: لا يوجد" } ],
        v2: [ { en: "Pages audited: 214", ar: "الصفحات المدققة: 214", changed: true }, { en: "Pages to remove: 27", ar: "صفحات للحذف: 27", changed: true }, { en: "Reviewer: Daniel K.", ar: "المراجع: دانيال ك.", changed: true } ] } },
    { name: "redirects.csv", icon: "document_text_20_regular", current: "v1",
      meta: { en: "Created 30 Oct by Daniel K.", ar: "أُنشئ في 30 أكتوبر بواسطة دانيال ك." },
      versions: [ { v: "v1", st: "current" } ],
      compare: null },
    { name: "launch-plan.docx", icon: "document_20_regular", current: "v1",
      meta: { en: "Created 14 Oct by Sara R.", ar: "أُنشئ في 14 أكتوبر بواسطة سارة ر." },
      versions: [ { v: "v1", st: "current" } ],
      compare: null }
  ],
  // Question A-C
  questions: [
    { q: { en: "Who approves the launch date?", ar: "من يعتمد موعد الإطلاق؟" }, from: "dk",
      body: { en: "The launch sign-off task is blocked. Who needs to approve the date before we can go live?", ar: "مهمة اعتماد الإطلاق متوقفة. من يجب أن يعتمد الموعد قبل أن نطلق الموقع؟" },
      replies: [ { from: "sr", text: { en: "The communications team. I asked them on 28 Oct and have not heard back yet.", ar: "فريق الاتصال. سألتهم في 28 أكتوبر ولم يصلني رد بعد." } } ] },
    { q: { en: "Are blog posts in scope?", ar: "هل التدوينات ضمن النطاق؟" }, from: "dk",
      body: { en: "The audit lists 40 blog posts. Do they move in this phase or the next one?", ar: "يذكر التدقيق 40 تدوينة. هل تُنقل في هذه المرحلة أم في المرحلة التالية؟" },
      replies: [] },
    { q: { en: "Where is the staging login?", ar: "أين بيانات الدخول إلى بيئة الاختبار؟" }, from: "dk", restrictedAccess: true,
      body: { en: "I need access to staging to continue redirect testing.", ar: "أحتاج إلى الوصول إلى بيئة الاختبار لمتابعة اختبار التحويلات." },
      replies: [] }
  ],
  // Handover sections
  sections: {
    summary: { en: ["We are moving the company website from the old CMS to the new platform.", "The content audit and redirect map are done. Redirect testing and the launch sign-off are still open."],
               ar: ["ننقل موقع الشركة من نظام إدارة المحتوى القديم إلى المنصة الجديدة.", "اكتمل تدقيق المحتوى وخريطة التحويلات. ولا يزال اختبار التحويلات واعتماد الإطلاق مفتوحين."] },
    completed: { en: ["Content audit of all 214 pages, verified by Daniel K.", "Redirect map for the 27 changed URLs. It still needs review."],
                 ar: ["تدقيق محتوى جميع الصفحات الـ214، وتحقق منه دانيال ك.", "خريطة تحويلات لـ27 رابطًا تغيّر. ولا تزال تحتاج إلى مراجعة."] },
    remaining: { en: ["Test every redirect on the staging site.", "Get the launch sign-off from the communications team."],
                 ar: ["اختبار كل تحويل على موقع الاختبار.", "الحصول على اعتماد الإطلاق من فريق الاتصال."] },
    issues: { en: ["The launch sign-off is blocked until the communications team confirms a date."],
              ar: ["اعتماد الإطلاق متوقف حتى يؤكد فريق الاتصال موعدًا."] }
  },
  refs: {
    summary: { file: "audit.xlsx / v2", evidence: { en: "Content audit sign-off", ar: "اعتماد تدقيق المحتوى" }, passage: { en: "“All 214 pages reviewed; 27 need a redirect.”", ar: "«تمت مراجعة جميع الصفحات الـ214، و27 منها تحتاج إلى تحويل.»" } },
    completed: { file: "audit.xlsx / v2", evidence: { en: "Content audit sign-off", ar: "اعتماد تدقيق المحتوى" }, passage: { en: "“Reviewer: Daniel K.”", ar: "«المراجع: دانيال ك.»" } },
    remaining: { file: "redirects.csv / v1", evidence: { en: "Redirect map", ar: "خريطة التحويلات" }, passage: { en: "“/about-us → /company/about, 301”", ar: "«/about-us → /company/about, 301»" }, unsupported: true },
    issues: { file: "launch-plan.docx / v1", evidence: { en: "Question: launch date", ar: "سؤال: موعد الإطلاق" }, passage: { en: "“Content freeze starts 5 working days before go-live.”", ar: "«يبدأ تجميد المحتوى قبل 5 أيام عمل من الإطلاق.»" } }
  },
  ai: {
    suggestion: { en: "Mention that redirect testing is still pending and has no evidence yet.", ar: "اذكر أن اختبار التحويلات لا يزال قيد الانتظار ولا توجد له أدلة بعد." },
    insertText: { en: "Redirect testing is still pending and has no evidence yet.", ar: "لا يزال اختبار التحويلات قيد الانتظار ولا توجد له أدلة بعد." },
    source: "redirects.csv / v1",
    review: { en: "The summary does not mention that the launch sign-off is blocked.", ar: "لا يذكر الملخص أن اعتماد الإطلاق متوقف." }
  }
};

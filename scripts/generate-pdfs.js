const PDFDocument = require('pdfkit')
const fs = require('fs')
const path = require('path')

const BRAND = {
  name: 'Qeja',
  fullName: 'QE-JA Real Estate Management System',
  company: 'Hatari Technologies Limited',
  website: 'https://www.qe-ja.com',
  email: 'info@hataritech.com',
  address: 'Nairobi, Kenya',
}

const COLORS = {
  heading: '#1a1a1a',
  body: '#333333',
  accent: '#DEB526',
  muted: '#666666',
  line: '#e0e0e0',
}

function createHeader(doc, title, subtitle) {
  doc.fontSize(24).font('Helvetica-Bold').fillColor(COLORS.heading).text(title, { align: 'center' })
  doc.moveDown(0.3)
  doc.fontSize(11).font('Helvetica').fillColor(COLORS.muted).text(subtitle, { align: 'center' })
  doc.moveDown(0.3)
  doc.fontSize(9).fillColor(COLORS.muted).text(`${BRAND.fullName} | ${BRAND.website}`, { align: 'center' })
  doc.moveDown(0.5)

  // Divider
  const y = doc.y
  doc.moveTo(50, y).lineTo(doc.page.width - 50, y).strokeColor(COLORS.line).lineWidth(1).stroke()
  doc.moveDown(1)
}

function sectionTitle(doc, text) {
  doc.moveDown(0.5)
  doc.fontSize(14).font('Helvetica-Bold').fillColor(COLORS.heading).text(text)
  doc.moveDown(0.3)
}

function subSection(doc, text) {
  doc.fontSize(11).font('Helvetica-Bold').fillColor(COLORS.heading).text(text)
  doc.moveDown(0.2)
}

function bodyText(doc, text) {
  doc.fontSize(10).font('Helvetica').fillColor(COLORS.body).text(text, { lineGap: 3 })
  doc.moveDown(0.4)
}

function bulletPoint(doc, text) {
  doc.fontSize(10).font('Helvetica').fillColor(COLORS.body).text(`  •  ${text}`, { lineGap: 2, indent: 10 })
  doc.moveDown(0.15)
}

function effectiveDate(doc) {
  doc.moveDown(0.5)
  doc.fontSize(9).font('Helvetica-Oblique').fillColor(COLORS.muted).text(`Effective Date: 1 March 2026`, { align: 'center' })
  doc.fontSize(9).text(`Last Updated: 28 February 2026`, { align: 'center' })
  doc.moveDown(0.8)
}

function footer(doc) {
  doc.moveDown(1)
  const y = doc.y
  doc.moveTo(50, y).lineTo(doc.page.width - 50, y).strokeColor(COLORS.line).lineWidth(0.5).stroke()
  doc.moveDown(0.5)
  doc.fontSize(8).font('Helvetica').fillColor(COLORS.muted).text(
    `${BRAND.company} | ${BRAND.address} | ${BRAND.email}`,
    { align: 'center' }
  )
  doc.text(`This document is the property of ${BRAND.company}. All rights reserved.`, { align: 'center' })
}

// =====================================================
// 1. PRIVACY POLICY
// =====================================================
function generatePrivacyPolicy(outputPath) {
  const doc = new PDFDocument({ size: 'A4', margin: 50 })
  doc.pipe(fs.createWriteStream(outputPath))

  createHeader(doc, 'Privacy Policy', `${BRAND.fullName}`)
  effectiveDate(doc)

  sectionTitle(doc, '1. Introduction')
  bodyText(doc, `${BRAND.company} ("we", "us", "our") operates the ${BRAND.fullName} platform ("Qeja", "the Platform"). This Privacy Policy explains how we collect, use, store, and protect personal data when you use our services.`)
  bodyText(doc, `We are committed to protecting your privacy in compliance with the Kenya Data Protection Act, 2019 (DPA), the General Data Protection Regulation (EU GDPR), and all other applicable data protection legislation.`)

  sectionTitle(doc, '2. Data Controller')
  bodyText(doc, `The data controller for information processed through the Platform is:`)
  bodyText(doc, `${BRAND.company}\n${BRAND.address}\nEmail: ${BRAND.email}\nWebsite: ${BRAND.website}`)

  sectionTitle(doc, '3. Information We Collect')
  subSection(doc, '3.1 Information You Provide Directly')
  bulletPoint(doc, 'Account registration details (name, email, phone number, organization name)')
  bulletPoint(doc, 'Property and unit information')
  bulletPoint(doc, 'Tenant personal data (names, ID numbers, contact details, employment information)')
  bulletPoint(doc, 'Financial transaction records (M-Pesa codes, bank references, invoice data)')
  bulletPoint(doc, 'Lease and contract details')
  bulletPoint(doc, 'Communications sent through the Platform')

  subSection(doc, '3.2 Information Collected Automatically')
  bulletPoint(doc, 'Log data (IP address, browser type, access times)')
  bulletPoint(doc, 'Usage analytics (features used, session duration)')
  bulletPoint(doc, 'Device information')
  bulletPoint(doc, 'Cookies and similar tracking technologies')

  subSection(doc, '3.3 Information from Third Parties')
  bulletPoint(doc, 'Identity verification results (via SmileID, white-labeled as "Identity Verification")')
  bulletPoint(doc, 'Consent form status (via DocuSeal, white-labeled as "Digital Consent")')
  bulletPoint(doc, 'Qeja Tenant Network data (verified tenancy records from other Qeja-managed properties)')

  sectionTitle(doc, '4. How We Use Your Information')
  bodyText(doc, 'We process personal data for the following purposes:')
  bulletPoint(doc, 'Providing and maintaining the Platform services')
  bulletPoint(doc, 'Processing financial transactions and M-Pesa payment verification')
  bulletPoint(doc, 'Conducting tenant background checks (with explicit consent)')
  bulletPoint(doc, 'Operating the Qeja Tenant Network for landlord protection')
  bulletPoint(doc, 'AI-powered analytics: payment pattern analysis, vacancy prediction, revenue forecasting, expense anomaly detection, and tenant risk scoring')
  bulletPoint(doc, 'Generating invoices, receipts, and financial reports')
  bulletPoint(doc, 'Sending communications (rent reminders, lease notifications) on behalf of your organization')
  bulletPoint(doc, 'Compliance with legal obligations (tax reporting, audit trails)')
  bulletPoint(doc, 'Improving our services and developing new features')

  sectionTitle(doc, '5. Legal Basis for Processing')
  bodyText(doc, 'We process personal data under the following legal bases:')
  bulletPoint(doc, 'Performance of contract: To provide Platform services you have subscribed to')
  bulletPoint(doc, 'Consent: For identity verification, background checks, and the Tenant Network')
  bulletPoint(doc, 'Legitimate interest: For fraud prevention, security, and service improvement')
  bulletPoint(doc, 'Legal obligation: For tax compliance, audit requirements, and regulatory reporting')

  sectionTitle(doc, '6. Data Sharing')
  bodyText(doc, 'We do not sell your personal data. We share data only in these circumstances:')
  bulletPoint(doc, 'Qeja Tenant Network: Only verified negative tenancy information (evictions, unpaid balances) is shared with other Qeja-managed properties, and only during the tenant screening process')
  bulletPoint(doc, 'Service providers: Identity verification and digital consent providers who process data on our behalf under strict data processing agreements')
  bulletPoint(doc, 'Your organization: Platform data is accessible to authorized users within your organization according to their role permissions')
  bulletPoint(doc, 'Legal requirements: When required by law, court order, or regulatory authority')

  sectionTitle(doc, '7. Data Storage and Security')
  bodyText(doc, 'Your data is stored on Google Cloud Platform infrastructure with the following safeguards:')
  bulletPoint(doc, 'Encryption at rest and in transit (TLS 1.2+)')
  bulletPoint(doc, 'Organization-level data isolation (each organization\'s data is logically separated)')
  bulletPoint(doc, 'Role-based access controls')
  bulletPoint(doc, 'Regular security audits and monitoring')
  bulletPoint(doc, 'Automated backups with disaster recovery procedures')

  sectionTitle(doc, '8. Data Retention')
  bodyText(doc, 'We retain personal data for the duration of your subscription plus a 30-day grace period. Upon account termination:')
  bulletPoint(doc, 'Complete data export is provided within 48 hours of request')
  bulletPoint(doc, '30-day grace period to verify exported data')
  bulletPoint(doc, 'After 30 days: permanent, irreversible deletion (not archived, not backed up)')
  bulletPoint(doc, 'Deletion certificate available upon request')

  sectionTitle(doc, '9. Your Rights')
  bodyText(doc, 'Under the Kenya DPA and GDPR, you have the right to:')
  bulletPoint(doc, 'Access: Request a copy of all personal data we hold about you')
  bulletPoint(doc, 'Rectification: Correct inaccurate or incomplete data')
  bulletPoint(doc, 'Erasure: Request deletion of your personal data ("right to be forgotten")')
  bulletPoint(doc, 'Data portability: Receive your data in standard formats (CSV, JSON, PDF)')
  bulletPoint(doc, 'Restriction: Limit how we process your data')
  bulletPoint(doc, 'Objection: Object to processing based on legitimate interest')
  bulletPoint(doc, 'Withdraw consent: Revoke previously given consent at any time')
  bodyText(doc, `To exercise any of these rights, contact us at ${BRAND.email}.`)

  sectionTitle(doc, '10. Cookies')
  bodyText(doc, 'We use essential cookies for authentication and session management. Analytics cookies are used only with your consent. You can manage cookie preferences through your browser settings.')

  sectionTitle(doc, '11. International Data Transfers')
  bodyText(doc, 'Data is primarily stored and processed in regions served by Google Cloud Platform. Where data is transferred outside Kenya or the EEA, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) or adequacy decisions.')

  sectionTitle(doc, '12. Children\'s Privacy')
  bodyText(doc, 'The Platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children.')

  sectionTitle(doc, '13. Changes to This Policy')
  bodyText(doc, 'We may update this Privacy Policy from time to time. We will notify you of any material changes via email or through the Platform. Continued use of the Platform after notification constitutes acceptance of the updated policy.')

  sectionTitle(doc, '14. Contact Us')
  bodyText(doc, `For any questions or concerns about this Privacy Policy or our data practices, contact:\n\nData Protection Officer\n${BRAND.company}\n${BRAND.address}\nEmail: ${BRAND.email}`)

  footer(doc)
  doc.end()
  console.log(`✓ Privacy Policy saved to ${outputPath}`)
}

// =====================================================
// 2. TERMS OF SERVICE
// =====================================================
function generateTermsOfService(outputPath) {
  const doc = new PDFDocument({ size: 'A4', margin: 50 })
  doc.pipe(fs.createWriteStream(outputPath))

  createHeader(doc, 'Terms of Service', `${BRAND.fullName}`)
  effectiveDate(doc)

  sectionTitle(doc, '1. Acceptance of Terms')
  bodyText(doc, `These Terms of Service ("Terms") govern your access to and use of the ${BRAND.fullName} platform ("Qeja", "the Platform"), operated by ${BRAND.company} ("we", "us", "our"). By accessing or using the Platform, you agree to be bound by these Terms.`)
  bodyText(doc, 'If you are using the Platform on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.')

  sectionTitle(doc, '2. Description of Service')
  bodyText(doc, 'Qeja is a B2B property management platform that provides:')
  bulletPoint(doc, 'Property and unit portfolio management')
  bulletPoint(doc, 'Tenant lifecycle management (onboarding, management, offboarding)')
  bulletPoint(doc, 'Financial services including M-Pesa payment verification and bank reconciliation')
  bulletPoint(doc, 'AI-powered predictive analytics (payment patterns, vacancy forecasting, revenue projection, expense anomaly detection, tenant risk scoring)')
  bulletPoint(doc, 'The Qeja Tenant Network for cross-property tenant screening')
  bulletPoint(doc, 'Digital contracts, e-signatures, and automated invoicing')
  bulletPoint(doc, 'Multi-channel communications (email, SMS, WhatsApp)')
  bulletPoint(doc, 'Compliance and audit trail management')

  sectionTitle(doc, '3. Account Registration')
  bodyText(doc, 'To use the Platform, you must:')
  bulletPoint(doc, 'Provide accurate and complete registration information')
  bulletPoint(doc, 'Maintain the security of your account credentials')
  bulletPoint(doc, 'Promptly notify us of any unauthorized use of your account')
  bulletPoint(doc, 'Be at least 18 years of age')
  bodyText(doc, 'You are responsible for all activities that occur under your account.')

  sectionTitle(doc, '4. Subscription Plans and Pricing')
  subSection(doc, '4.1 Plans')
  bodyText(doc, 'The Platform offers multiple subscription tiers (Starter, Professional, Enterprise) with varying features and capabilities. Current pricing is available at www.qe-ja.com.')
  subSection(doc, '4.2 Billing')
  bulletPoint(doc, 'Subscriptions are billed monthly or annually as selected')
  bulletPoint(doc, 'All prices are in Kenya Shillings (KES) unless otherwise stated')
  bulletPoint(doc, 'Prices are exclusive of applicable taxes (VAT, withholding tax)')
  subSection(doc, '4.3 Free Tier')
  bodyText(doc, 'The Starter plan is free with limited features. We reserve the right to modify or discontinue the free tier with 30 days\' notice.')

  sectionTitle(doc, '5. Acceptable Use')
  bodyText(doc, 'You agree not to:')
  bulletPoint(doc, 'Use the Platform for any illegal purpose or in violation of any laws')
  bulletPoint(doc, 'Submit false, misleading, or fraudulent information')
  bulletPoint(doc, 'Attempt to gain unauthorized access to the Platform or other users\' accounts')
  bulletPoint(doc, 'Interfere with or disrupt the Platform\'s infrastructure')
  bulletPoint(doc, 'Reverse engineer, decompile, or disassemble any part of the Platform')
  bulletPoint(doc, 'Use the Platform to harass, abuse, or harm others')
  bulletPoint(doc, 'Misuse the Qeja Tenant Network by submitting unverified or false tenant records')

  sectionTitle(doc, '6. Qeja Tenant Network')
  bodyText(doc, 'The Qeja Tenant Network enables cross-property tenant screening. By participating:')
  bulletPoint(doc, 'You agree to submit only accurate, verified information about tenant records')
  bulletPoint(doc, 'Only verified negative records (evictions, confirmed unpaid balances, documented property damage) are shared')
  bulletPoint(doc, 'Tenant consent is required before background checks are conducted')
  bulletPoint(doc, 'You acknowledge that Network data is informational only and does not constitute a recommendation to accept or reject a tenant')
  bulletPoint(doc, 'You are solely responsible for your tenancy decisions')

  sectionTitle(doc, '7. AI-Powered Features')
  bodyText(doc, 'The Platform includes AI-powered analytics and predictions. You acknowledge that:')
  bulletPoint(doc, 'AI predictions (payment defaults, vacancy forecasting, tenant risk scores) are probabilistic estimates, not guarantees')
  bulletPoint(doc, 'AI insights should be used as one input among many in your decision-making')
  bulletPoint(doc, 'We are not liable for business decisions made based on AI predictions')
  bulletPoint(doc, 'AI models are continuously improved and outputs may change over time')

  sectionTitle(doc, '8. Data Ownership')
  bodyText(doc, 'You retain ownership of all data you input into the Platform ("Your Data"). You grant us a limited license to process Your Data solely for the purpose of providing the Platform services.')
  bodyText(doc, 'We do not claim ownership of Your Data. Upon termination, you may export all Your Data in standard formats (CSV, JSON, PDF) at no additional charge.')

  sectionTitle(doc, '9. Intellectual Property')
  bodyText(doc, 'The Platform, including its design, code, algorithms, AI models, and documentation, is the intellectual property of Hatari Technologies Limited. Your subscription grants you a non-exclusive, non-transferable license to use the Platform for its intended purpose.')

  sectionTitle(doc, '10. Service Availability')
  bodyText(doc, 'We strive to maintain high availability but do not guarantee uninterrupted service. We may:')
  bulletPoint(doc, 'Perform scheduled maintenance with advance notice')
  bulletPoint(doc, 'Experience unplanned outages due to circumstances beyond our control')
  bulletPoint(doc, 'Modify or update features to improve the Platform')

  sectionTitle(doc, '11. Limitation of Liability')
  bodyText(doc, 'To the maximum extent permitted by law:')
  bulletPoint(doc, 'The Platform is provided "as is" and "as available"')
  bulletPoint(doc, 'We are not liable for indirect, incidental, special, or consequential damages')
  bulletPoint(doc, 'Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim')
  bulletPoint(doc, 'We are not liable for decisions made based on AI predictions or Tenant Network data')

  sectionTitle(doc, '12. Indemnification')
  bodyText(doc, 'You agree to indemnify and hold harmless Hatari Technologies Limited from any claims, damages, or expenses arising from your use of the Platform, your violation of these Terms, or your violation of any third-party rights.')

  sectionTitle(doc, '13. Termination')
  bodyText(doc, 'Either party may terminate the subscription:')
  bulletPoint(doc, 'You may cancel at any time through the Platform settings')
  bulletPoint(doc, 'We may terminate for violation of these Terms with written notice')
  bulletPoint(doc, 'Upon termination, you have 30 days to export your data before permanent deletion')

  sectionTitle(doc, '14. Dispute Resolution')
  bodyText(doc, 'These Terms are governed by the laws of the Republic of Kenya. Any disputes shall be resolved through:')
  bulletPoint(doc, 'Good faith negotiation (30 days)')
  bulletPoint(doc, 'Mediation under the Nairobi Centre for International Arbitration')
  bulletPoint(doc, 'If unresolved, binding arbitration in Nairobi, Kenya')

  sectionTitle(doc, '15. Modifications')
  bodyText(doc, 'We may modify these Terms with 30 days\' notice via email or the Platform. Continued use after the notice period constitutes acceptance.')

  sectionTitle(doc, '16. Contact')
  bodyText(doc, `For questions about these Terms, contact:\n\n${BRAND.company}\n${BRAND.address}\nEmail: ${BRAND.email}`)

  footer(doc)
  doc.end()
  console.log(`✓ Terms of Service saved to ${outputPath}`)
}

// =====================================================
// 3. DATA PROTECTION POLICY
// =====================================================
function generateDataProtectionPolicy(outputPath) {
  const doc = new PDFDocument({ size: 'A4', margin: 50 })
  doc.pipe(fs.createWriteStream(outputPath))

  createHeader(doc, 'Data Protection Policy', `${BRAND.fullName}`)
  effectiveDate(doc)

  sectionTitle(doc, '1. Introduction and Commitment')
  bodyText(doc, `${BRAND.company} is deeply committed to protecting the personal data of all individuals whose information is processed through the ${BRAND.fullName} platform. This Data Protection Policy outlines our framework for ensuring compliance with:`)
  bulletPoint(doc, 'The Kenya Data Protection Act, 2019 (DPA)')
  bulletPoint(doc, 'The General Data Protection Regulation (EU) 2016/679 (GDPR)')
  bulletPoint(doc, 'All other applicable data protection and privacy legislation')
  bodyText(doc, 'As a B2B platform serving property management organizations across East Africa, we recognize that we process significant volumes of personal data on behalf of our clients and their tenants. This policy demonstrates our accountability and transparency.')

  sectionTitle(doc, '2. Kenya Data Protection Act (DPA) Compliance')
  bodyText(doc, 'The Kenya DPA, enacted in 2019, is the primary data protection legislation governing our operations. We comply with all provisions including:')

  subSection(doc, '2.1 Registration with the ODPC')
  bodyText(doc, 'We are registered with the Office of the Data Protection Commissioner (ODPC) as both a data controller and data processor, as required under Section 18 of the DPA.')

  subSection(doc, '2.2 Lawful Processing (Section 25)')
  bodyText(doc, 'All personal data processed through the Platform is done so on a lawful basis:')
  bulletPoint(doc, 'Consent of the data subject (e.g., tenant background checks, identity verification)')
  bulletPoint(doc, 'Performance of a contract (e.g., providing Platform services to subscribers)')
  bulletPoint(doc, 'Compliance with a legal obligation (e.g., tax reporting, audit trails)')
  bulletPoint(doc, 'Legitimate interest (e.g., fraud prevention, security)')

  subSection(doc, '2.3 Consent Management')
  bodyText(doc, 'For processing that requires consent (particularly tenant background checks and identity verification):')
  bulletPoint(doc, 'Consent is collected digitally through DocuSeal (white-labeled as "Digital Consent")')
  bulletPoint(doc, 'Consent is freely given, specific, informed, and unambiguous')
  bulletPoint(doc, 'Records of consent are maintained and auditable')
  bulletPoint(doc, 'Consent can be withdrawn at any time without affecting the lawfulness of prior processing')

  subSection(doc, '2.4 Data Subject Rights (Section 26)')
  bodyText(doc, 'We facilitate the exercise of all rights guaranteed under the Kenya DPA:')
  bulletPoint(doc, 'Right to be informed about data collection and processing')
  bulletPoint(doc, 'Right of access to personal data')
  bulletPoint(doc, 'Right to rectification of inaccurate data')
  bulletPoint(doc, 'Right to deletion of personal data')
  bulletPoint(doc, 'Right to restrict processing')
  bulletPoint(doc, 'Right to data portability')
  bulletPoint(doc, 'Right to object to processing')

  subSection(doc, '2.5 Sensitive Personal Data (Section 44)')
  bodyText(doc, 'Where the Platform processes sensitive personal data (including national identification numbers for tenant verification), additional safeguards are applied:')
  bulletPoint(doc, 'Explicit consent is obtained before processing')
  bulletPoint(doc, 'Enhanced encryption and access controls are in place')
  bulletPoint(doc, 'Processing is limited to what is strictly necessary')

  sectionTitle(doc, '3. General Data Protection Regulation (GDPR) Compliance')
  bodyText(doc, 'Although primarily operating in East Africa, we comply with the GDPR to protect any EU/EEA data subjects and to maintain the highest international standards.')

  subSection(doc, '3.1 Data Protection Principles (Article 5)')
  bodyText(doc, 'We adhere to all GDPR data protection principles:')
  bulletPoint(doc, 'Lawfulness, fairness, and transparency: Clear communication about how data is processed')
  bulletPoint(doc, 'Purpose limitation: Data is collected for specified, explicit, and legitimate purposes')
  bulletPoint(doc, 'Data minimization: Only data necessary for the stated purpose is collected')
  bulletPoint(doc, 'Accuracy: We maintain mechanisms for data correction and updates')
  bulletPoint(doc, 'Storage limitation: Data is retained only as long as necessary')
  bulletPoint(doc, 'Integrity and confidentiality: Appropriate security measures protect all personal data')
  bulletPoint(doc, 'Accountability: We can demonstrate compliance with all principles')

  subSection(doc, '3.2 Data Protection by Design and Default (Article 25)')
  bodyText(doc, 'Privacy is embedded into the Platform architecture:')
  bulletPoint(doc, 'Organization-level data isolation ensures each client\'s data is logically separated')
  bulletPoint(doc, 'Role-based access controls limit data access to authorized personnel')
  bulletPoint(doc, 'AI models are designed to operate on aggregated, anonymized data where possible')
  bulletPoint(doc, 'Default settings prioritize privacy (e.g., minimum data collection, secure defaults)')

  subSection(doc, '3.3 Data Protection Impact Assessment (Article 35)')
  bodyText(doc, 'We conduct DPIAs for high-risk processing activities including:')
  bulletPoint(doc, 'AI-powered tenant risk scoring')
  bulletPoint(doc, 'Qeja Tenant Network cross-property data sharing')
  bulletPoint(doc, 'Identity verification through third-party services')

  subSection(doc, '3.4 International Data Transfers (Articles 44-49)')
  bodyText(doc, 'Where data is transferred outside Kenya or the EEA:')
  bulletPoint(doc, 'Standard Contractual Clauses (SCCs) are in place with all sub-processors')
  bulletPoint(doc, 'We assess the data protection laws of recipient countries')
  bulletPoint(doc, 'Supplementary measures are implemented where necessary')

  subSection(doc, '3.5 Data Breach Notification (Articles 33-34)')
  bodyText(doc, 'In the event of a personal data breach:')
  bulletPoint(doc, 'The ODPC and relevant supervisory authorities are notified within 72 hours')
  bulletPoint(doc, 'Affected data subjects are notified without undue delay if the breach poses a high risk')
  bulletPoint(doc, 'All breaches are documented with root cause analysis and remediation steps')

  sectionTitle(doc, '4. Data Processing Activities')
  subSection(doc, '4.1 Platform-Level Processing (Hatari Technologies as Data Controller)')
  bulletPoint(doc, 'User account management and authentication')
  bulletPoint(doc, 'Platform analytics and service improvement')
  bulletPoint(doc, 'Qeja Tenant Network operation')
  bulletPoint(doc, 'Identity verification services')

  subSection(doc, '4.2 Organization-Level Processing (Hatari Technologies as Data Processor)')
  bulletPoint(doc, 'Tenant personal data management on behalf of property management organizations')
  bulletPoint(doc, 'Financial transaction processing (M-Pesa verification, bank reconciliation)')
  bulletPoint(doc, 'Communications sent to tenants on behalf of organizations')
  bulletPoint(doc, 'AI-powered analytics on organizational data')

  sectionTitle(doc, '5. AI and Automated Decision-Making')
  bodyText(doc, 'The Platform uses AI for predictive analytics. Under both the Kenya DPA (Section 35) and GDPR (Article 22):')
  bulletPoint(doc, 'AI predictions are advisory only and do not constitute automated decision-making with legal effects')
  bulletPoint(doc, 'Human oversight is always involved in tenancy decisions')
  bulletPoint(doc, 'Data subjects have the right to contest decisions influenced by AI predictions')
  bulletPoint(doc, 'We provide meaningful information about the logic, significance, and consequences of AI processing')
  bulletPoint(doc, 'AI models are regularly audited for fairness and bias')

  sectionTitle(doc, '6. Data Security Measures')
  bodyText(doc, 'We implement comprehensive technical and organizational measures:')

  subSection(doc, '6.1 Technical Measures')
  bulletPoint(doc, 'AES-256 encryption at rest')
  bulletPoint(doc, 'TLS 1.2+ encryption in transit')
  bulletPoint(doc, 'Google Cloud Platform infrastructure with SOC 2 Type II certification')
  bulletPoint(doc, 'Automated vulnerability scanning and patching')
  bulletPoint(doc, 'Multi-factor authentication for administrative access')
  bulletPoint(doc, 'Database-level encryption and access logging')

  subSection(doc, '6.2 Organizational Measures')
  bulletPoint(doc, 'Data protection training for all staff')
  bulletPoint(doc, 'Background checks for employees with data access')
  bulletPoint(doc, 'Confidentiality agreements with all personnel and contractors')
  bulletPoint(doc, 'Regular security audits and penetration testing')
  bulletPoint(doc, 'Incident response plan with defined roles and escalation procedures')

  sectionTitle(doc, '7. Data Retention and Deletion')
  bodyText(doc, 'Our retention policy ensures data is not kept longer than necessary:')
  bulletPoint(doc, 'Active subscription: Data retained for the duration of service')
  bulletPoint(doc, 'Post-termination: Complete data export within 48 hours of request')
  bulletPoint(doc, 'Grace period: 30 days after termination to verify exported data')
  bulletPoint(doc, 'Permanent deletion: After 30 days, all data is permanently and irreversibly erased')
  bulletPoint(doc, 'Deletion certificate: Available upon request confirming complete data removal')
  bulletPoint(doc, 'Backup purge: All backup copies are also deleted within the same timeframe')

  sectionTitle(doc, '8. Sub-Processors')
  bodyText(doc, 'We engage the following categories of sub-processors, all bound by data processing agreements:')
  bulletPoint(doc, 'Cloud infrastructure: Google Cloud Platform (data hosting and processing)')
  bulletPoint(doc, 'Identity verification: SmileID (tenant identity checks, white-labeled)')
  bulletPoint(doc, 'Digital consent: DocuSeal (consent form collection, white-labeled)')
  bulletPoint(doc, 'Communication services: Configured per-organization (Email, SMS, WhatsApp)')

  sectionTitle(doc, '9. Data Protection Officer')
  bodyText(doc, `We have appointed a Data Protection Officer who can be contacted at:\n\nData Protection Officer\n${BRAND.company}\n${BRAND.address}\nEmail: ${BRAND.email}`)

  sectionTitle(doc, '10. Complaints')
  bodyText(doc, 'If you believe your data protection rights have been violated, you have the right to:')
  bulletPoint(doc, 'Contact our Data Protection Officer')
  bulletPoint(doc, 'Lodge a complaint with the Office of the Data Protection Commissioner (ODPC), Kenya')
  bulletPoint(doc, 'Lodge a complaint with the relevant supervisory authority under the GDPR')

  sectionTitle(doc, '11. Policy Review')
  bodyText(doc, 'This Data Protection Policy is reviewed and updated at least annually, or whenever there are significant changes to our data processing activities, applicable legislation, or organizational structure.')

  footer(doc)
  doc.end()
  console.log(`✓ Data Protection Policy saved to ${outputPath}`)
}

// =====================================================
// GENERATE ALL
// =====================================================
const publicDir = path.join(__dirname, '..', 'public', 'docs')
const desktopDir = path.join(require('os').homedir(), 'Desktop')

// Ensure public/docs exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// Generate PDFs
generatePrivacyPolicy(path.join(publicDir, 'Qeja-Privacy-Policy.pdf'))
generateTermsOfService(path.join(publicDir, 'Qeja-Terms-of-Service.pdf'))
generateDataProtectionPolicy(path.join(publicDir, 'Qeja-Data-Protection-Policy.pdf'))

// Copy to Desktop after a short delay (PDFs need to finish writing)
setTimeout(() => {
  const files = [
    'Qeja-Privacy-Policy.pdf',
    'Qeja-Terms-of-Service.pdf',
    'Qeja-Data-Protection-Policy.pdf',
  ]
  files.forEach((file) => {
    const src = path.join(publicDir, file)
    const dest = path.join(desktopDir, file)
    fs.copyFileSync(src, dest)
    console.log(`✓ Copied ${file} to Desktop`)
  })
  console.log('\nAll PDFs generated and copied to Desktop!')
}, 2000)

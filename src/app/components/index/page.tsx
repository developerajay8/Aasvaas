"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Mingcute from "../../../../public/assets/spark.png";
import Mingcute1 from "../../../../public/assets/Group.png";
import Mingcute2 from "../../../../public/assets/Vector (4).png";
// import Group2 from "../../../../public/assets/Group 133.png";
import Group3 from "../../../../public/assets/Search.png";
// import Group4 from "../../../../public/assets/image.png";
// import Group5 from "../../../../public/assets/Frame 17.png";
import News1 from "../../../../public/assets/Vector (8).png";
import Courtic from "../../../../public/assets/map_courthouse (3).png";
import Rectangle1 from "../../../../public/assets/Frame 3385028.svg";
import Uiw from "../../../../public/assets/Vector (8).png";
import Map from "../../../../public/assets/map_courthouse (1).png";
import Framelast from "../../../../public/assets/Group 44 (2).png";
import Chaticon from "../../../../public/assets/Frame 3384720.png";
import Searchicon from "../../../../public/assets/Frame 3384718.png";
import Database from "../../../../public/assets/Frame 3384719.png";
import Virtual from "../../../../public/assets/Frame 3384719 (1).png";
import Slider from "../slider/page";
import Contact from "../contact/page";
import Link from "next/link";

interface NewsItem {
  heading: string;
  date: string;
  context: string;
  imageUrl: string;
}


export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const [news, setNews] = useState<NewsItem[]>([]);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth * 0.8;
    }
  }, []);

  useEffect(() => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollLeft = scrollRef1.current.scrollWidth * 0.3;
    }
  }, []);

  useEffect(() => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth * 0.4;
    }
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const data = [
    {
      title: "Prevention of Corruption Act -- Bribery charges require clear proof of demand and acceptance -- Chemical tests alone do not prove guilt – corroborative evidence of demand and acceptance is required -- Courts will not apply the presumption under Section 20 unless demand is first established beyond reasonable doubt.",
      caseDetail: "[Madan Lal vs. State of Rajasthan, 2025 Legal Eagle 280]",
      description:
        "Prevention of Corruption Act, 1988; Ss. 7(2), 13(i)(d), 13(2) — Code of Criminal Procedure, 1973; S. 164 — Failure to Prove Demand and Acceptance of Bribe in a Trap Case — Was the prosecution able to prove beyond reasonable doubt that the accused demanded and accepted the bribe — Did the inconsistencies in witness statements raise reasonable doubt regarding the guilt of the accused — Was the presumption under Section 20 of the Prevention of Corruption Act applicable — Different versions about the exact amount of bribe demanded by the accused — Contradictions between the initial complaint and deposition in court — They did not witness the accused accepting the bribe — Testified that currency notes were scattered on the floor, contradicting the trap team’s claims — PW 3 (Inspector) and PW 4 (Constable) claimed to have seen the bribe being handed over — However, independent witnesses (PW 1 & PW 2) confirmed they arrived after the signal was given, meaning they did not witness the transaction — PW 6 (office employee) and PW 7 (auto driver) did not support the prosecution’s case — Presumption of guilt arises only if demand is established — Since the demand itself was doubtful, the presumption under Section 20 did not apply — Conviction Set Aside — Accused acquitted as prosecution failed to prove demand and acceptance beyond reasonable doubt — Presumption under Section 20 not applied due to lack of clear demand evidence — Bail Bonds Cancelled — No further punishment for the accused.",
      date: "07/03/2025"
    },
    {
      title: "Service Law -- No vested right to appointment exists for selected candidates unless the process is complete and approved -- Governments can cancel a recruitment process if it is tainted by serious irregularities. ",
      caseDetail: "[State of Assam & Ors. vs. Arabinda Rabha & Ors., 2025 Legal Eagle 281]",
      description:
        "Service Law — Recruitment, selection, and cancellation of appointments — Validity of Government’s Cancellation of Recruitment Process Due to Alleged Irregularities Was the cancellation of the recruitment process arbitrary, unreasonable, or disproportionate under the Wednesbury unreasonableness and proportionality doctrines — Did the selected candidates have an indefeasible right to appointment — Did the High Court err in directing the continuation of the selection process — Candidates do not acquire an indefeasible right to appointment just by being included in the select list (Shankarsan Dash case) — Government has discretion to cancel recruitment, provided the decision is fair and non-arbitrary — Wednesbury unreasonableness test — The decision was not irrational or arbitrary — Proportionality test — Cancellation was proportionate to the seriousness of the irregularities, which affected merit-based selection, reservation, and fair representation — High Court acted beyond judicial review by substituting its own decision instead of assessing whether the Government acted arbitrarily — Courts should not interfere in policy decisions unless they are mala fide, arbitrary, or unreasonable — While cancellation was justified, relief was granted Age relaxation for affected candidates to apply in the fresh recruitment — Minor deficiencies in physical tests to be waived, considering the time lapse — Further relaxations left to the PCCF’s discretion — Appeal Allowed — Assam Government’s decision upheld — High Court’s judgment quashed — Direction to continue selection was set aside — Fresh recruitment to be conducted with relaxations for affected candidates.",
      date: "07/03/2025"
    },
    {
      title: "IPC and POCSO Act can be applied together when punishment under IPC is stricter -- High Court cannot enhance punishment in an appeal by the accused unless the prosecution also appeals -- Victim compensation is an essential part of justice in sexual assault cases.",
      caseDetail: "[Gyanendra Singh @ Raja Singh vs. State of U.P., 2025 Legal Eagle 282]",
      description:
        "Indian Penal Code, 1860; Ss. 376(2)(f), 376(2)(i) — Protection of Children from Sexual Offences (POCSO) Act, 2012; Ss. 3, 4, 5, 42A, 42 — Applicability of IPC and POCSO Act in Child Sexual Assault Cases and Scope of Judicial Discretion in Sentencing — Whether the accused could be convicted under both IPC and POCSO Act for the same offence — Whether the High Court erred in modifying the sentence to life imprisonment for the remainder of the appellant’s natural life — Whether the High Court could enhance the punishment without an appeal from the prosecution; S. 42 of POCSO Act states that whichever law (IPC or POCSO) prescribes a greater sentence shall apply — IPC prescribes a higher sentence (life imprisonment for natural life) than POCSO — There is no inconsistency between IPC and POCSO; rather, they are complementary — Trial Court awarded life imprisonment but did not specify till the remainder of natural life — High Court's modification increased the severity of the sentence, making it effectively an enhancement, which is impermissible without a prosecution appeal — Precedents (Swamy Shraddhananda, Navas v. State of Kerala) allow fixed-term sentencing, which the High Court did not consider — Supreme Court restored the original trial court’s sentence of life imprisonment without specifying remainder of natural life — Fixed fine of ₹5,00,000 imposed; in default, two years additional imprisonment — Clarified that the sentence under IPC takes precedence over POCSO due to the greater punishment — Conviction under IPC and POCSO upheld — High Court’s enhancement of remainder of natural life sentence set aside — Restored Trial Court’s sentence of life imprisonment (without natural life stipulation) — Fine of ₹5,00,000 imposed, payable to the victim — Both sentences to run concurrently — Appeal partially allowed.",
      date: "07/03/2025"
    },
    {
      title: "IPC and POCSO Act can be applied together when punishment under IPC is stricter -- High Court cannot enhance punishment in an appeal by the accused unless the prosecution also appeals -- Victim compensation is an essential part of justice in sexual assault cases.",
      caseDetail:
        "[Gyanendra Singh @ Raja Singh vs. State of U.P., 2025 Legal Eagle 282]",
      description:
        "Indian Penal Code, 1860; Ss. 376(2)(f), 376(2)(i) — Protection of Children from Sexual Offences (POCSO) Act, 2012; Ss. 3, 4, 5, 42A, 42 — Applicability of IPC and POCSO Act in Child Sexual Assault Cases and Scope of Judicial Discretion in Sentencing — Whether the accused could be convicted under both IPC and POCSO Act for the same offence — Whether the High Court erred in modifying the sentence to life imprisonment for the remainder of the appellant’s natural life — Whether the High Court could enhance the punishment without an appeal from the prosecution; S. 42 of POCSO Act states that whichever law (IPC or POCSO) prescribes a greater sentence shall apply — IPC prescribes a higher sentence (life imprisonment for natural life) than POCSO — There is no inconsistency between IPC and POCSO; rather, they are complementary — Trial Court awarded life imprisonment but did not specify till the remainder of natural life — High Court's modification increased the severity of the sentence, making it effectively an enhancement, which is impermissible without a prosecution appeal — Precedents (Swamy Shraddhananda, Navas v. State of Kerala) allow fixed-term sentencing, which the High Court did not consider — Supreme Court restored the original trial court’s sentence of life imprisonment without specifying remainder of natural life — Fixed fine of ₹5,00,000 imposed; in default, two years additional imprisonment — Clarified that the sentence under IPC takes precedence over POCSO due to the greater punishment — Conviction under IPC and POCSO upheld — High Court’s enhancement of remainder of natural life sentence set aside — Restored Trial Court’s sentence of life imprisonment (without natural life stipulation) — Fine of ₹5,00,000 imposed, payable to the victim — Both sentences to run concurrently — Appeal partially allowed.",
      date: "07/03/2025"
    },
    {
      title: "Examination Fraud Case -- Cancellation of Bail -- Granting bail in serious fraud cases must consider the societal impact -- Public faith in examinations must be protected against corruption.",
      caseDetail:
        "[State of Rajasthan vs. Indraj Singh etc., 2025 Legal Eagle 283]",
      description:
        "Indian Penal Code, 1860; Ss. 419, 420, 467, 468, 120B, 498-A, 304B — Rajasthan Public Examination (Prevention of Unfair Means) Act, 2022; Ss. 3, 10 — Cancellation of Bail Granted in Examination Fraud Case — Whether the High Court erred in granting bail to the accused despite the gravity of the offence — Whether the Trial Court’s decision to deny bail was justified in light of the allegations and their impact on society — What are the principles governing the setting aside of a bail order, and do they apply in the present case — Courts distinguish between setting aside an unjustified bail order and cancelling bail due to misconduct after release — Here, the grant of bail itself was legally unsustainable given the facts of the case (Mahipal v. Rajesh Kumar, 2020) — Public examinations are highly competitive, and fraudulent practices undermine the meritocratic system — A rigorous selection process must be free from manipulation to maintain public trust — Alleged acts were not just individual crimes but an attack on institutional integrity — Trial Court had rightly denied bail due to the seriousness of the allegations — High Court failed to consider financial transactions and documented impersonation attempts — Court reaffirmed that bail should not be revoked arbitrarily — However, where the grant of bail itself is perverse, superior courts must intervene (Ajwar v. Waseem, 2024) — Supreme Court allowed the appeal, setting aside the High Court’s bail order — Accused must surrender within two weeks before the trial court — Accused may reapply for bail after examination of material witnesses.",
      date: "07/03/2025"
    },
    {
      title: "Conviction -- Testimony of the prosecutrix alone can be sufficient for conviction if credible -- Absence of injuries does not negate rape, as victims may be overpowered -- Delay in FIR is not fatal if satisfactorily explained.",
      caseDetail:
        "[Lok Mal @ Loku vs. State of Uttar Pradesh, 2025 Legal Eagle 284]",
      description:
        "Indian Penal Code, 1860; Ss. 376, 323, 504, 506 — Code of Criminal Procedure, 1973; S. 313 — Credibility of Sole Testimony of Prosecutrix in Rape Convictions — Whether the conviction under Section 376 and 323 IPC was justified based on the sole testimony of the prosecutrix — Whether the absence of injuries on the prosecutrix negates the occurrence of rape — Whether the prosecution’s delay in filing the FIR was fatal to the case — Whether the accused was falsely implicated due to enmity with the prosecutrix — Courts have repeatedly held that rape victim’s testimony is equivalent to an injured witness and does not require corroboration unless it is unreliable or contradictory (State of Punjab v. Gurmit Singh) — Prosecutrix’s statement was consistent, detailed, and credible — Relying on Bharwada Bhoginbhai Hirjibhai v. State of Gujarat, the Court reaffirmed that injuries are not mandatory in every rape case — Since the accused gagged and overpowered the prosecutrix, the absence of injuries is not a ground for acquittal — Prosecutrix’s family faced threats from the accused’s relatives, causing hesitation in lodging the complaint — Delay alone is not a ground for acquittal when the explanation is plausible — Moral character of the prosecutrix’s mother cannot be used to discredit the victim’s testimony — Accused failed to provide any evidence proving false implication — Supreme Court dismissed the appeal and affirmed the conviction under Section 376 and 323 IPC — Directed the State to consider remission as per policy, given the long passage of time (incident occurred in 1984, High Court judgment in 2010).",
      date: "07/03/2025"
    },
    {
      title: "Civil Law -- High Court cannot interfere with factual findings in a Second Appeal unless there is a substantial question of law -- An injunction suit is maintainable if the plaintiff has clear title and possession, even if the title is disputed by the defendants.",
      caseDetail: "[Ayyavu vs. Prabha and Others, 2025 Legal Eagle 277]",
      description:
        "Code of Civil Procedure, 1908; S. 100 — Dispute Over Land Ownership and Possession — Suit for Injunction and Mandatory Injunction — Whether the plaintiff (appellant) had rightful ownership and possession over the disputed portion (1¼ cents) of the suit land — Whether the defendants (respondents) could claim rights over the disputed land based on an alleged settlement deed in favor of the Gram Panchayat — Whether the High Court was justified in reversing the findings of the First Appellate Court on factual issues in a second appeal under Section 100 CPC — Whether the plaintiff’s suit for injunction was maintainable without seeking a declaratory relief regarding ownership — Sale deed dated 23.08.1988 (Exhibit-A1) clearly defined the boundaries of the purchased land — No evidence showed that Mariyammal retained ownership of the disputed 1¼ cents — Commissioner’s Report and Sketch confirmed that the disputed property fell within the plaintiff’s land — Exhibit-B8 was an unregistered document and had no legal effect in transferring title — Gram Panchayat could not claim ownership without proper legal conveyance; S. 100 CPC (Second Appeal) only allows intervention on substantial questions of law — High Court wrongly reappreciated factual findings, which were already settled by the First Appellate Court — No substantial question of law was involved; hence, the High Court’s decision was erroneous — Since the defendants had no valid title claim, a suit for injunction alone was sufficient — High Court erred in dismissing the suit on technical grounds — Appeal Allowed — High Court’s Judgment Set Aside — Trial Court’s Dismissal of the Suit Overturned — First Appellate Court’s Judgment Restoring Plaintiff’s Ownership Rights Reinstated — Plaintiff Granted Injunction Against Defendants.",
      date: "07/03/2025"
    },
    {
      title: "Transfer of property -- Auction Sales in Liquidation Do Not Create New Rights – If a company holds defective title or no title, the auction purchaser cannot claim better rights than the company had.",
      caseDetail: "[Delhi Development Authority vs. S.G.G. Towers (P) Ltd. & Ors., 2025 Legal Eagle 278]",
      description:
        "Delhi Development Act, 1957; S. 22 — Delhi Development Authority (Disposal of Developed Nazul Land) Rules, 1981 — Rule 43 — Validity of Leasehold Rights and Property Transfer in Liquidation Proceedings — Whether M/s Mehta Constructions had any legal right, title, or interest in the plot under the lease agreement — Whether the sale by M/s Mehta Constructions to M/s Pure Drinks was valid despite no lease deed being executed — Whether the auction sale of the plot in the liquidation proceedings of M/s Pure Drinks conferred any legal ownership or leasehold rights to the auction purchaser (first respondent) — Whether the Delhi Development Authority (DDA) had a valid claim for unearned income from the auction sale proceeds — What remedies were available to the appellant (DDA) in light of the auction confirmation — Agreement to lease (1957) did not create ownership or leasehold rights until compliance was made and a lease deed executed — Since no lease deed was executed, M/s Mehta Constructions had no right to sell the plot in 1972 or 1985 — Auction was conducted on an as-is basis,  meaning the purchaser (first respondent) only got whatever rights M/s Pure Drinks had—which were non-existent — Auction did not amount to a fresh sale of the plot itself — DDA’s Claim for Unearned Income Could Not Be Enforced Against Liquidation Proceeds — Funds in liquidation were subject to multiple claims, including tax liabilities — Court could not direct payment of unearned income to DDA from the liquidation estate — DDA can initiate separate proceedings to recover possession of the plot or claim unearned income from the auction purchaser — If the auction purchaser (first respondent) wishes to regularize the transaction, it must apply to DDA and comply with legal requirements — Appeal dismissed, but with clarifications on legal rights:",
      date: "07/03/2025"
    }
  ];

  const data2 = [
    {
      title: "Criminal Law -- Negligence under Section 304A IPC must involve a proximate, direct act causing death due to reckless indifference not mere workplace accidents -- Lower courts must carefully distinguish between Sections 304 Part II (knowledge-based homicide) and 304A (negligence-based death).",
      caseDetail:
        "[Yuvraj Laxmilal Kanther & Anr. vs. State of Maharashtra, 2025 Legal Eagle 279]",
      description:
        "Code of Criminal Procedure, 1973; Ss. 174, 227 — Indian Penal Code, 1860; Ss. 304, 304A — Criminal Liability for Workplace Accidents — Negligence vs. Culpable Homicide — Whether the appellants could be charged under Section 304 Part II IPC for the accidental electrocution of two workers — Whether failure to provide safety equipment amounts to criminal negligence under Section 304A IPC — Whether there was sufficient material to frame charges and proceed with the trial — Whether the discharge applications of the appellants should have been allowed under Section 227 CrPC — No evidence of intention or knowledge on the part of the appellants that their actions were likely to cause death — Mere non-provision of safety gear does not elevate negligence to culpable homicide — Even for negligence, the factual circumstances do not show a clear-cut case under Section 304A IPC — Event was an unforeseen accident, not a deliberate act of reckless indifference — Trial court and High Court misconstrued knowledge and negligence under Sections 304 Part II & 304A IPC — Bhopal Gas Tragedy involved systemic, large-scale negligence, whereas this was an isolated workplace accident — Applying Article 142 powers in Keshub Mahindra was context-specific and not applicable here — Trial Court and High Court orders rejecting discharge applications were set aside — Appellants discharged from the case as there was no sufficient material to justify criminal proceedings — Trial Court's order (01.04.2017) and High Court’s order (02.11.2017) were quashed — Appellants discharged from Sessions Case No. 749 of 2014 — Criminal Appeal allowed.",
      date: "07/03/2025"

    },
    {
      title: "Judicial review in electoral matters is limited but permissible when election irregularities are evident -- Recount can be ordered when election fairness is in doubt, even if the margin of victory is greater than the disputed votes.",
      caseDetail:
        "[Vijay Bahadur vs. Sunil Kumar & Ors., 2025 Legal Eagle 271]",
      description:
        "U.P. Panchayat Raj Act, 1947; S. 12-C(1) — Haryana Panchayat Raj Act, 1994; S. 176 — Electoral Disputes — Recount of Votes & Judicial Review — Whether the Sub-Divisional Magistrate (SDM) was justified in ordering a recount of votes — Whether the High Court erred in setting aside the order for recount — Whether there was sufficient evidence to support the claim of irregularities in the election — Whether the secrecy of the ballot was compromised by the recount order — Relying on Hussain Kamil Kidwai v. Kamil (1964 SC), recounts can only be granted when:",
      date: "06/03/2025"

    },
    {
      title: "Preventive detention cannot be used to bypass the judicial bail process without examining the effectiveness of bail conditions -- Mere reference to a past conviction (NDPS Act) does not invalidate a COFEPOSA detention order unless it forms a ground for detention.",
      caseDetail:
        "[Joyi Kitty Joseph vs. Union of India & Ors., 2025 Legal Eagle 272]",
      description:
        "Conservation of Foreign Exchange and Prevention of Smuggling Activities Act, 1974 (COFEPOSA Act); S. 3(1) — Customs Act, 1962; S. 108 — Preventive Detention, Smuggling, and Judicial Review of Detention Orders — Whether the detention order against the detenu under the COFEPOSA Act was legally valid — Whether the detaining authority failed to consider the bail conditions imposed by the jurisdictional Magistrate, thereby violating procedural safeguards in preventive detention cases — Whether the reference to the detenu’s past conviction under the NDPS Act vitiated the detention order — Detenu was found to be directly engaged in smuggling, abetting, transporting, concealing, and selling foreign-origin gold in India — Entire smuggling chain was traced to the detenu, confirming his central role in illegal activities — Detaining authority was justified in invoking all four clauses, as the detenu actively participated at every stage of the smuggling operation — Past NDPS conviction was not a basis for the detention order, only a reference to show the detenu’s criminal history — No violation of the proviso to Section 3(1) COFEPOSA was found — Detaining authority did not examine whether the bail conditions imposed by the Magistrate were sufficient to prevent the detenu from continuing smuggling activities — A key requirement for preventive detention is that existing legal measures (like bail conditions) must be insufficient—this was not considered in the detention order — Courts do not interfere in the subjective satisfaction of detaining authorities, but the lack of consideration of relevant factors (bail conditions) vitiates the order — Rameshwar Lal Patwari v. State of Bihar (1968) emphasized that preventive detention laws require strict scrutiny to protect personal liberty — Supreme Court held that the failure to consider bail conditions invalidated the detention order — If still in custody, the detenu was ordered to be released forthwith — Ruling reaffirmed that preventive detention cannot be used as a tool to override ordinary legal procedures like bail conditions without proper justification.",
      date: "06/03/2025"

    },
    {
      title: "Adverse Possession Doctrine -- High Court cannot interfere in factual findings unless there is a substantial question of law, and permissive possession does not amount to adverse possession.",
      caseDetail:
        "[Rabindranath Panigrahi vs. Surendra Sahu, 2025 Legal Eagle 273]",
      description:
        "Transfer of Property Act, 1882; S. 106 — Civil Procedure Code, 1908; S. 100 — Adverse Possession Doctrine — Landlord-Tenant Dispute & Adverse Possession Claim in Second Appeal Jurisdiction — Whether the High Court was justified in interfering with the concurrent factual findings of the Trial Court and First Appellate Court in a Second Appeal under Section 100 CPC — Whether the defendant (tenant) had perfected title over the suit premises by way of adverse possession — Plaintiff was the legally adopted son of Smt. Ashalata Devi and the rightful owner — Defendant was a tenant; no valid proof of adverse possession or oral gift was presented — Tenant was in default and liable for eviction — Affirmed the Trial Court’s findings — Held that permissive possession cannot be converted into adverse possession — Defendant failed to prove any legal ownership over the premises — Held that the landlord-tenant relationship was not conclusively proved — Stated that the plaintiff should file a fresh suit for title and recovery of possession — High Court exceeded its jurisdiction under Section 100 CPC — Findings of the lower courts were purely factual and did not warrant interference — Defendant’s possession was permissive and lacked hostile intent — Defendant was directed to vacate the premises within three months and pay arrears — Supreme Court set aside the High Court’s judgment and restored the Trial Court and First Appellate Court’s orders, directing the tenant to Vacate the premises within three months — Clear all outstanding rent and dues before vacating — Appeal allowed, with communication of the judgment to the High Court for further action.",
      date: "06/03/2025"

    },
    {
      title: "Preventive Detention -- Grounds of detention must be provided in a language the detenu understands -- Oral explanations do not suffice.",
      caseDetail:
        "[Mortuza Hussain Choudhary vs. State of Nagaland and others, 2025 Legal Eagle 262]",
      description:
        "Narcotic Drugs and Psychotropic Substances Act, 1985; Ss. 22(b), 60, 3(1) — Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act, 1988; S. 3(1) — Preventive Detention and its Constitutional Safeguards — Right to be Informed of Grounds of Detention in a Language Known to the Detenu — Legal Standards for Preventive Detention of Persons in Custody — Whether the detention orders were valid, considering that the detenus were already in judicial custody when the orders were passed — Whether there was a real likelihood of the detenus being released on bail to justify preventive detention — Whether the grounds of detention were adequately communicated in a language understood by the detenus, ensuring their right under Article 22(5) of the Constitution — Whether the detaining authority independently applied its mind while issuing detention orders — A person in custody can be preventively detained only if:",
      date: "05/03/2025"

    },
    {
      title: "Unlawful Assembly and Common Object -- Unlawful assembly with a common object makes all participants liable for murder, even if they did not inflict fatal blows.",
      caseDetail:
        "[Tanaji Shamrao Kale vs. State of Maharashtra, 2025 Legal Eagle 263] ",
      description:
        "Indian Penal Code, 1860; Ss. 148, 302, 149 — Code of Criminal Procedure, 1973; Ss. 161, 162 — Unlawful Assembly and Common Object — Reliability of Eyewitness Testimony — Defence of Alibi — Whether the conviction under Section 302 IPC read with Section 149 IPC was justified based on eyewitness testimony — Whether accused no.9 (Tanaji) was present at the crime scene, or whether his alibi was valid — Whether non-examination of other eyewitnesses weakened the prosecution’s case — PW-1 (complainant) saw the accused attacking the deceased with swords. He was not contradicted in cross-examination — PW-2 (independent witness) saw accused no.9 (Tanaji) using a sword, though it was not recorded in his police statement (considered a minor omission) — PW-5 (mother of PW-1) left the scene before accused no.9 arrived, explaining why she did not mention him — All accused were part of a group that attacked the deceased — Accused no.9 (Tanaji) joined in the attack by taking a sword from accused no.1 and assaulting the deceased — Presence and participation in an unlawful assembly can lead to vicarious liability for murder — Police records showed he was assigned duty but did not confirm his presence at a different location — Burden of proof is on the accused to establish alibi beyond reasonable doubt — PW-2 was an independent witness with no enmity against the accused, making his testimony reliable — If examined witnesses are credible, non-examination of other witnesses is not fatal — Conviction Upheld — Appeals dismissed, confirming life imprisonment under Section 302 read with Section 149 IPC — Accused No.9 (Tanaji) Ordered to Surrender — He must serve the remaining sentence within one month — Accused Nos.1, 2, and 5 Already Released — No further action required if they have completed their sentences.",
      date: "05/03/2025"

    },
    {
      title: "Section 34 IPC – Common Intention -- Court upheld Section 34 IPC liability, holding that accused nos.2 and 3 shared a common intention with accused no.1.",
      caseDetail:
        "[Suresh @ Hanumant vs. State (Govt. of NCT Delhi), 2025 Legal Eagle 264]",
      description:
        "Indian Penal Code, 1860; Ss. 302, 34 — Arms Act, 1959; Ss. 25(1B)(a), 27(1) — Criminal Law — Murder and Common Intention — Evidentiary Law — Dying Declaration — Forensic Evidence — Reliability of Ballistic Report — Whether the conviction of the accused under Section 302 read with Section 34 IPC was justified based on the dying declaration and circumstantial evidence — Whether non-confirmation of firearm evidence affects the prosecution’s case — Whether accused nos.2 and 3, who did not fire the weapon, could be held guilty under common intention (Section 34 IPC) — PW-1 (wife) and PW-2 (brother) consistently testified that the deceased identified accused no.1 as the shooter and accused nos.2 and 3 as present at the scene — There were no contradictions in their statements — Deceased knew the accused, making identification in dim light possible — K.R. Reddy v. State of A.P. (1976) — A reliable dying declaration can be sole evidence for conviction — Accused nos.2 and 3 accompanied accused no.1 to the crime scene — Their presence established a pre-planned attack — Legal Precedent: Krishna Govind Patil v. State of Maharashtra (1963) — Common intention does not require active participation but can be inferred from prior conduct — Forensic Science Laboratory (FSL) could not determine whether the bullet recovered was fired from the accused’s pistol — However, since the dying declaration was credible, the lack of conclusive firearm evidence was irrelevant — Conviction Upheld — Supreme Court dismissed the appeals and upheld the life imprisonment of all three accused under Section 302 read with Section 34 IPC — 2 years' imprisonment under Section 25(1B)(a) of the Arms Act for possession of an illegal firearm — Remission Consideration Allowed — State Government was directed to consider remission as per law when the accused become eligible.",
      date: "05/03/2025"
    },
  ];

  const cases = [
    {
      title:
        "Prevention of Corruption Act, 1988; Ss. 7(2), 13(i)(d), 13(2) — Code of Criminal Procedure, 1973; S. 164 — Failure to Prove Demand and Acceptance of Bribe in a Trap Case — Was the prosecution able to prove beyond reasonable doubt that the accused demanded and accepted the bribe — Did the inconsistencies in witness statements raise reasonable doubt regarding the guilt of the accused — Was the presumption under Section 20 of the Prevention of Corruption Act applicable — Different versions about the exact amount of bribe demanded by the accused — Contradictions between the initial complaint and deposition in court — They did not witness the accused accepting the bribe — Testified that currency notes were scattered on the floor, contradicting the trap teams claims — PW 3 (Inspector) and PW 4 (Constable) claimed to have seen the bribe being handed over — However, independent witnesses (PW 1 & PW 2) confirmed they arrived after the signal was given, meaning they did not witness the transaction — PW 6 (office employee) and PW 7 (auto driver) did not support the prosecutions case — Presumption of guilt arises only if demand is established — Since the demand itself was doubtful, the presumption under Section 20 did not apply — Conviction Set Aside — Accused acquitted as prosecution failed to prove demand and acceptance beyond reasonable doubt — Presumption under Section 20 not applied due to lack of clear demand evidence — Bail Bonds Cancelled — No further punishment for the accused.",
      date: "07-03-2025",

    },
    {
      title:
        "Service Law — Recruitment, selection, and cancellation of appointments — Validity of Government’s Cancellation of Recruitment Process Due to Alleged Irregularities Was the cancellation of the recruitment process arbitrary, unreasonable, or disproportionate under the Wednesbury unreasonableness and proportionality doctrines — Did the selected candidates have an indefeasible right to appointment — Did the High Court err in directing the continuation of the selection process — Candidates do not acquire an indefeasible right to appointment just by being included in the select list (Shankarsan Dash case) — Government has discretion to cancel recruitment, provided the decision is fair and non-arbitrary — Wednesbury unreasonableness test — The decision was not irrational or arbitrary — Proportionality test — Cancellation was proportionate to the seriousness of the irregularities, which affected merit-based selection, reservation, and fair representation — High Court acted beyond judicial review by substituting its own decision instead of assessing whether the Government acted arbitrarily — Courts should not interfere in policy decisions unless they are mala fide, arbitrary, or unreasonable — While cancellation was justified, relief was granted Age relaxation for affected candidates to apply in the fresh recruitment — Minor deficiencies in physical tests to be waived, considering the time lapse — Further relaxations left to the PCCF’s discretion — Appeal Allowed — Assam Government’s decision upheld — High Court’s judgment quashed — Direction to continue selection was set aside — Fresh recruitment to be conducted with relaxations for affected candidates.",
      date: "07-03-2025",

    },
    {
      title:
        "Indian Penal Code, 1860; Ss. 376(2)(f), 376(2)(i) — Protection of Children from Sexual Offences (POCSO) Act, 2012; Ss. 3, 4, 5, 42A, 42 — Applicability of IPC and POCSO Act in Child Sexual Assault Cases and Scope of Judicial Discretion in Sentencing — Whether the accused could be convicted under both IPC and POCSO Act for the same offence — Whether the High Court erred in modifying the sentence to life imprisonment for the remainder of the appellant’s natural life — Whether the High Court could enhance the punishment without an appeal from the prosecution; S. 42 of POCSO Act states that whichever law (IPC or POCSO) prescribes a greater sentence shall apply — IPC prescribes a higher sentence (life imprisonment for natural life) than POCSO — There is no inconsistency between IPC and POCSO; rather, they are complementary — Trial Court awarded life imprisonment but did not specify till the remainder of natural life — High Court's modification increased the severity of the sentence, making it effectively an enhancement, which is impermissible without a prosecution appeal — Precedents (Swamy Shraddhananda, Navas v. State of Kerala) allow fixed-term sentencing, which the High Court did not consider — Supreme Court restored the original trial court’s sentence of life imprisonment without specifying remainder of natural life — Fixed fine of ₹5,00,000 imposed; in default, two years additional imprisonment — Clarified that the sentence under IPC takes precedence over POCSO due to the greater punishment — Conviction under IPC and POCSO upheld — High Court’s enhancement of remainder of natural life sentence set aside — Restored Trial Court’s sentence of life imprisonment (without natural life stipulation) — Fine of ₹5,00,000 imposed, payable to the victim — Both sentences to run concurrently — Appeal partially allowed.",
      date: "07-03-2025",

    },
    {
      title:
        "Indian Penal Code, 1860; Ss. 419, 420, 467, 468, 120B, 498-A, 304B — Rajasthan Public Examination (Prevention of Unfair Means) Act, 2022; Ss. 3, 10 — Cancellation of Bail Granted in Examination Fraud Case — Whether the High Court erred in granting bail to the accused despite the gravity of the offence — Whether the Trial Court’s decision to deny bail was justified in light of the allegations and their impact on society — What are the principles governing the setting aside of a bail order, and do they apply in the present case — Courts distinguish between setting aside an unjustified bail order and cancelling bail due to misconduct after release — Here, the grant of bail itself was legally unsustainable given the facts of the case (Mahipal v. Rajesh Kumar, 2020) — Public examinations are highly competitive, and fraudulent practices undermine the meritocratic system — A rigorous selection process must be free from manipulation to maintain public trust — Alleged acts were not just individual crimes but an attack on institutional integrity — Trial Court had rightly denied bail due to the seriousness of the allegations — High Court failed to consider financial transactions and documented impersonation attempts — Court reaffirmed that bail should not be revoked arbitrarily — However, where the grant of bail itself is perverse, superior courts must intervene (Ajwar v. Waseem, 2024) — Supreme Court allowed the appeal, setting aside the High Court’s bail order — Accused must surrender within two weeks before the trial court — Accused may reapply for bail after examination of material witnesses.",
      date: "07-03-2025",

    },
    {
      title:
        "Indian Penal Code, 1860; Ss. 376, 323, 504, 506 — Code of Criminal Procedure, 1973; S. 313 — Credibility of Sole Testimony of Prosecutrix in Rape Convictions — Whether the conviction under Section 376 and 323 IPC was justified based on the sole testimony of the prosecutrix — Whether the absence of injuries on the prosecutrix negates the occurrence of rape — Whether the prosecution’s delay in filing the FIR was fatal to the case — Whether the accused was falsely implicated due to enmity with the prosecutrix — Courts have repeatedly held that rape victim’s testimony is equivalent to an injured witness and does not require corroboration unless it is unreliable or contradictory (State of Punjab v. Gurmit Singh) — Prosecutrix’s statement was consistent, detailed, and credible — Relying on Bharwada Bhoginbhai Hirjibhai v. State of Gujarat, the Court reaffirmed that injuries are not mandatory in every rape case — Since the accused gagged and overpowered the prosecutrix, the absence of injuries is not a ground for acquittal — Prosecutrix’s family faced threats from the accused’s relatives, causing hesitation in lodging the complaint — Delay alone is not a ground for acquittal when the explanation is plausible — Moral character of the prosecutrix’s mother cannot be used to discredit the victim’s testimony — Accused failed to provide any evidence proving false implication — Supreme Court dismissed the appeal and affirmed the conviction under Section 376 and 323 IPC — Directed the State to consider remission as per policy, given the long passage of time (incident occurred in 1984, High Court judgment in 2010).",
      date: "07-03-2025",

    },
    {
      title:
        "Code of Civil Procedure, 1908; S. 100 — Dispute Over Land Ownership and Possession — Suit for Injunction and Mandatory Injunction — Whether the plaintiff (appellant) had rightful ownership and possession over the disputed portion (1¼ cents) of the suit land — Whether the defendants (respondents) could claim rights over the disputed land based on an alleged settlement deed in favor of the Gram Panchayat — Whether the High Court was justified in reversing the findings of the First Appellate Court on factual issues in a second appeal under Section 100 CPC — Whether the plaintiff’s suit for injunction was maintainable without seeking a declaratory relief regarding ownership — Sale deed dated 23.08.1988 (Exhibit-A1) clearly defined the boundaries of the purchased land — No evidence showed that Mariyammal retained ownership of the disputed 1¼ cents — Commissioner’s Report and Sketch confirmed that the disputed property fell within the plaintiff’s land — Exhibit-B8 was an unregistered document and had no legal effect in transferring title — Gram Panchayat could not claim ownership without proper legal conveyance; S. 100 CPC (Second Appeal) only allows intervention on substantial questions of law — High Court wrongly reappreciated factual findings, which were already settled by the First Appellate Court — No substantial question of law was involved; hence, the High Court’s decision was erroneous — Since the defendants had no valid title claim, a suit for injunction alone was sufficient — High Court erred in dismissing the suit on technical grounds — Appeal Allowed — High Court’s Judgment Set Aside — Trial Court’s Dismissal of the Suit Overturned — First Appellate Court’s Judgment Restoring Plaintiff’s Ownership Rights Reinstated — Plaintiff Granted Injunction Against Defendants.",
      date: "07-03-2025",

    },
    {
      title:
        "Delhi Development Act, 1957; S. 22 — Delhi Development Authority (Disposal of Developed Nazul Land) Rules, 1981 — Rule 43 — Validity of Leasehold Rights and Property Transfer in Liquidation Proceedings — Whether M/s Mehta Constructions had any legal right, title, or interest in the plot under the lease agreement — Whether the sale by M/s Mehta Constructions to M/s Pure Drinks was valid despite no lease deed being executed — Whether the auction sale of the plot in the liquidation proceedings of M/s Pure Drinks conferred any legal ownership or leasehold rights to the auction purchaser (first respondent) — Whether the Delhi Development Authority (DDA) had a valid claim for unearned income from the auction sale proceeds — What remedies were available to the appellant (DDA) in light of the auction confirmation — Agreement to lease (1957) did not create ownership or leasehold rights until compliance was made and a lease deed executed — Since no lease deed was executed, M/s Mehta Constructions had no right to sell the plot in 1972 or 1985 — Auction was conducted on an as-is basis, meaning the purchaser (first respondent) only got whatever rights M/s Pure Drinks had—which were non-existent — Auction did not amount to a fresh sale of the plot itself — DDA’s Claim for Unearned Income Could Not Be Enforced Against Liquidation Proceeds — Funds in liquidation were subject to multiple claims, including tax liabilities — Court could not direct payment of unearned income to DDA from the liquidation estate — DDA can initiate separate proceedings to recover possession of the plot or claim unearned income from the auction purchaser — If the auction purchaser (first respondent) wishes to regularize the transaction, it must apply to DDA and comply with legal requirements — Appeal dismissed, but with clarifications on legal rights:",
      date: "07-03-2025",

    },
    {
      title:
        "Code of Criminal Procedure, 1973; Ss. 174, 227 — Indian Penal Code, 1860; Ss. 304, 304A — Criminal Liability for Workplace Accidents — Negligence vs. Culpable Homicide — Whether the appellants could be charged under Section 304 Part II IPC for the accidental electrocution of two workers — Whether failure to provide safety equipment amounts to criminal negligence under Section 304A IPC — Whether there was sufficient material to frame charges and proceed with the trial — Whether the discharge applications of the appellants should have been allowed under Section 227 CrPC — No evidence of intention or knowledge on the part of the appellants that their actions were likely to cause death — Mere non-provision of safety gear does not elevate negligence to culpable homicide — Even for negligence, the factual circumstances do not show a clear-cut case under Section 304A IPC — Event was an unforeseen accident, not a deliberate act of reckless indifference — Trial court and High Court misconstrued knowledge and negligence under Sections 304 Part II & 304A IPC — Bhopal Gas Tragedy involved systemic, large-scale negligence, whereas this was an isolated workplace accident — Applying Article 142 powers in Keshub Mahindra was context-specific and not applicable here — Trial Court and High Court orders rejecting discharge applications were set aside — Appellants discharged from the case as there was no sufficient material to justify criminal proceedings — Trial Court's order (01.04.2017) and High Court’s order (02.11.2017) were quashed — Appellants discharged from Sessions Case No. 749 of 2014 — Criminal Appeal allowed.",
      date: "07-03-2025",

    },
  ];

  const cases2 = [
    {
      title:
        "(A) Once resistance is offered by a purported stranger to the decree and which comes to be noted by the Executing Court as well as by the decree-holder the remedy available to the decree- holder against such an obstructionist in only under Order XXI Rule 97 sub-rule (1) and he cannot bypass such obstruction and insist on re- issuance of warrant for possession under Order XXI Rule 35 with the help of police force, as that course would amount to bypassing and circumventing the procedure laid down under Order XXI Rule 97 in connection with removal of obstruction of purported strangers to the decree. While Order XXI Rule 99 on the other hand deals with the subsequent stage in the execution proceedings where a stranger claiming any right, title and interest in the decretal property might have got actually dispossessed and claims restoration of possession on adjudication of his independent right, title and interest dehors the interest of the judgment-debtor. Both these types of enquiries in connection with the right, title and interest of a stranger to the decree are clearly contemplated by the aforesaid scheme of Order XXI and it is not as if that such a stranger to the decree can come in the picture only at the final stage after losing the possession and not before it if he is vigilant enough to raise his objection and obstruction before the warrant for possession gets actually executed against him With respect the High Court has totally ignored the scheme of Order XXI Rule 97 in this connection by taking the view that only remedy of such stranger to the decree lies under Order XXI Rule 99 and he has no locus standi to get adjudication of his claim prior to the actual delivery of possession to the decree-holder in the execution proceedings.",
      date: "06-03-2025"

    },
    {
      title:
        "(A) In the facts and circumstances of the instant case the ·Court in Chandigarh had no jurisdiction to entertain the criminal complaint as the Respondent's headquarters in Mumbai and it's the branch office in Coimbatore had solely processed the loan of the Petitioner. [TP (Crl] No.441 of 2024] in its order dated 24.10.2024 had held that financial institutions should avoid filing proceedings in various states merely because they have offices there, and should file proceedings in courts having jurisdiction where the actual transaction has taken place and where the cause of action has arisen. Ors, (2005) 8 SCC 771 : 2005 Legal Eagle (SC) 917 , para 25, apart from the above consideration of convenience, this Hon'ble Court also took into account the language in which the proceedings will take place, and the witnesses will testify in before allowing the transfer petition. Sankaran Vaidhyan Balan [ (1999) 7 SCC 510 : 1999 Legal Eagle (SC) 1075 ], this Court held that an offence under Section 138 of the Act of 1881 has five components : (1) drawing of the cheque, (2) presentation of the cheque to the bank, (3) returning of the cheque unpaid by the drawee bank, (4) giving notice in writing to the drawer of the cheque demanding payment of the cheque amount, and (5) failure of the drawer to make payment within 15 days of the receipt of the notice. It was further held that the Courts having jurisdiction over the territorial limits wherein any of the five acts, that constitute the components of the offence, occurred would have the jurisdiction to deal with the case and if the five acts were done in five different areas, any one of the Courts exercising jurisdiction in those five areas would have jurisdiction and the complainant could choose any one of those Courts.",
      date: "06-03-2025"

    },
    {
      title:
        "(A) State of Rajasthan reported in (2010) 1 SCC 250 : 2009 Legal Eagle (SC) 1435 held that a case can be proceeded with under Section 319 if, based upon the evidence brought on record in the course of any inquiry into, or trial of an offence, the court is prima facie satisfied that such person has committed any offence for which he can be tried with other accused. Though Section 319 CrPC provides that such person summoned as per sub-section (1) thereto could be jointly tried together with the other accused, keeping in view the power available to the court under Section 223 CrPC to hold a joint trial, it would also be open to the learned Sessions Judge at the point of considering the application under Section 319 CrPC and deciding to summon the additional accused, to also take a decision as to whether a joint trial is to be held after summoning such accused by deferring the judgment being passed against the tried accused. If a conclusion is reached that the fresh trial to be conducted against the newly added accused could be separately tried, in such event it would be open for the learned Sessions Judge to order so and proceed to pass the judgment and conclude the trial insofar as the accused against whom it had originally proceeded and thereafter proceed in the case of the newly added accused.",
      date: "06-03-2025"

    },
    {
      title:
        "U.P. Panchayat Raj Act, 1947; S. 12-C(1) — Haryana Panchayat Raj Act, 1994; S. 176 — Electoral Disputes — Recount of Votes & Judicial Review — Whether the Sub-Divisional Magistrate (SDM) was justified in ordering a recount of votes — Whether the High Court erred in setting aside the order for recount — Whether there was sufficient evidence to support the claim of irregularities in the election — Whether the secrecy of the ballot was compromised by the recount order — Relying on Hussain Kamil Kidwai v. Kamil (1964 SC), recounts can only be granted when:",
      date: "06-03-2025"

    },
    {
      title:
        "Transfer of Property Act, 1882; S. 106 — Civil Procedure Code, 1908; S. 100 — Adverse Possession Doctrine — Landlord-Tenant Dispute & Adverse Possession Claim in Second Appeal Jurisdiction — Whether the High Court was justified in interfering with the concurrent factual findings of the Trial Court and First Appellate Court in a Second Appeal under Section 100 CPC — Whether the defendant (tenant) had perfected title over the suit premises by way of adverse possession — Plaintiff was the legally adopted son of Smt. Ashalata Devi and the rightful owner — Defendant was a tenant; no valid proof of adverse possession or oral gift was presented — Tenant was in default and liable for eviction — Affirmed the Trial Court’s findings — Held that permissive possession cannot be converted into adverse possession — Defendant failed to prove any legal ownership over the premises — Held that the landlord-tenant relationship was not conclusively proved — Stated that the plaintiff should file a fresh suit for title and recovery of possession — High Court exceeded its jurisdiction under Section 100 CPC — Findings of the lower courts were purely factual and did not warrant interference — Defendant’s possession was permissive and lacked hostile intent — Defendant was directed to vacate the premises within three months and pay arrears — Supreme Court set aside the High Court’s judgment and restored the Trial Court and First Appellate Court’s orders, directing the tenant to Vacate the premises within three months — Clear all outstanding rent and dues before vacating — Appeal allowed, with communication of the judgment to the High Court for further action.",
      date: "06-03-2025"

    },
    {
      title:
        "Narcotic Drugs and Psychotropic Substances Act, 1985; Ss. 22(b), 60, 3(1) — Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act, 1988; S. 3(1) — Preventive Detention and its Constitutional Safeguards — Right to be Informed of Grounds of Detention in a Language Known to the Detenu — Legal Standards for Preventive Detention of Persons in Custody — Whether the detention orders were valid, considering that the detenus were already in judicial custody when the orders were passed — Whether there was a real likelihood of the detenus being released on bail to justify preventive detention — Whether the grounds of detention were adequately communicated in a language understood by the detenus, ensuring their right under Article 22(5) of the Constitution — Whether the detaining authority independently applied its mind while issuing detention orders — A person in custody can be preventively detained only if:",
      date: "05-03-2025"

    },
    {
      title:
        "Indian Penal Code, 1860; Ss. 148, 302, 149 — Code of Criminal Procedure, 1973; Ss. 161, 162 — Unlawful Assembly and Common Object — Reliability of Eyewitness Testimony — Defence of Alibi — Whether the conviction under Section 302 IPC read with Section 149 IPC was justified based on eyewitness testimony — Whether accused no.9 (Tanaji) was present at the crime scene, or whether his alibi was valid — Whether non-examination of other eyewitnesses weakened the prosecution’s case — PW-1 (complainant) saw the accused attacking the deceased with swords. He was not contradicted in cross-examination — PW-2 (independent witness) saw accused no.9 (Tanaji) using a sword, though it was not recorded in his police statement (considered a minor omission) — PW-5 (mother of PW-1) left the scene before accused no.9 arrived, explaining why she did not mention him — All accused were part of a group that attacked the deceased — Accused no.9 (Tanaji) joined in the attack by taking a sword from accused no.1 and assaulting the deceased — Presence and participation in an unlawful assembly can lead to vicarious liability for murder — Police records showed he was assigned duty but did not confirm his presence at a different location — Burden of proof is on the accused to establish alibi beyond reasonable doubt — PW-2 was an independent witness with no enmity against the accused, making his testimony reliable — If examined witnesses are credible, non-examination of other witnesses is not fatal — Conviction Upheld — Appeals dismissed, confirming life imprisonment under Section 302 read with Section 149 IPC — Accused No.9 (Tanaji) Ordered to Surrender — He must serve the remaining sentence within one month — Accused Nos.1, 2, and 5 Already Released — No further action required if they have completed their sentences.",
      date: "05-03-2025"

    },
  ];

  const latest = [
    {
      title:
        "S.O. 533 (Appointment of Shri Sanjay Parihar, District and Sessions Judge as Special Judge Anti-Corruption.)",
    },
    {
      title:
        "S.O. 529 (Appointment of Shri Ajaz Hussain Mir, Naib Tehsildar (LCMA), Srinagar as Executive Magistrate.)",
    },
    {
      title:
        "S.O. 526 (Appointment of Public Prosecutor(s), Special Public Prosecutor(s) & Additional Public Prosecutor(s) for conducting criminal cases.)",
    },
    {
      title:
        "S.O. 525 (In partial Modification of notification SRO 444 dated 01.10.2018.)",
    },
    {
      title:
        "	S.O. 520 (Appointment of Sh. S. Bhupinder Singh (Retd Joint Director of Prosecution) as Special Public Prosecutor.)",
    },
    {
      title:
        "S.O. 519 (Appointment of Sh. S. Bhupinder Singh (Retd Joint Director of Prosecution) as Special Public Prosecutor.)",
    },
    {
      title:
        "S.O. 518 (Appointment of Officer's of the J&K Prosecution Service as Assistant Public Prosecutor(s) (Asstt. PPs) for conducting criminal cases in the courts.)",
    },
    {
      title:
        "S.O. 517 (Up-gradation in the Pay Level of Chief Engineers.)",
    },
  ];

  const latest2 = [
    {
      title:
        "	S.O. 516 (Remission of life convict prisoner under section 473 of the BNSS.)",
    },
    {
      title:
        "S.O. 513 (Appointment of Ms. Shilpa Singh, Advocate as Special Public Prosecutor.)",
    },

    {
      title:
        "Rights of Persons with Disabilities (Amendment) Rules, 2024",
    },
    {
      title:
        "S.O. 510 (Amendments in the J&K Advocate General Organization (Subordinate) Service Recruitment Rules, 2019.)",
    },
    {
      title:
        "S.O. 508 (In Partial Modification of Notification S.O. 362 dated 20.10.2021.)",
    },
    {
      title:
        "S.O. 506 (Amendment in the J&K Civil Services (Decentralization & Recruitment) Rules, 2010.)",
    },
    {
      title:
        "S.O. 498 (J&K Judicial Officers (Allowances, Amenities and Advances) Rules, 2024.)",
    },
    {
      title:
        "Central Health Service (Amendment) Rules 2024",
    },
  ];

  return (
    <div className="">
      <div id="home" className="bg-[#0D354B] pb-[50px]">
        <div className="max-w-[1240px] mx-auto md:py-[80px] py-[20px]">
          <div className="max-w-[1215px] mx-auto md:flex xl:px-0 px-[20px] md:pt-[0px] pt-[20px] justify-between">
            <div className="max-w-[487px] mb-[30px] ">
              <span className="text-[18px] text-[#fff] font-[500] tracking-[6px]">
                LEGAL AI
              </span>
              <h3 className="sm:text-[44px] text-[36px] sm:leading-[50px] pt-[4px] text-[#fffff1] ">
                Your <span className=" text-[#2D9CDB]">AI-Powered</span> Legal
                Assistant <b> - Research Made Effortless.</b>
              </h3>
              <div className="max-w-[369px] pt-[4px] ">
                <p className="text-[18px] leading-[27px] font-[400] text-[#FFFFFF]">
                  Say goodbye to hours of legal research. Let AI simplify legal
                  complexities for you.
                </p>
                <ul className="pt-[14px] ">
                  <li className="flex items-center pb-[8px] gap-3">
                    <Image src={Mingcute} alt="Mingcute icon" />
                    <div className="text-[#2D9CDB] text-[16px] italic font-[400] ">
                      Simple to use – no tech skills required
                    </div>
                  </li>
                  <li className="flex items-center pb-[8px] gap-3">
                    <Image src={Mingcute1} alt="Mingcute icon" />
                    <div className="text-[#2D9CDB] text-[16px] italic font-[400] ">
                      Save hours on drafting and research
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image src={Mingcute2} alt="Mingcute icon" />
                    <div className="text-[#2D9CDB] text-[16px] italic font-[400] ">
                      Accurate & reliable
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <Link href={"https://youtu.be/kC4KhKwlrZg"}>
                <Image src={Rectangle1} alt="Rectangle1 bg" />
              </Link>
            </div>
          </div>
        </div>
      </div>





      <div className="max-w-[1441px] mx-auto z-50 md:mt-[-100px] mt-[-50px]">
        <div className="max-w-[912px]  mx-auto ">
          <div className="md:mx-0 mx-[20px] relative">


            <div className="bg-[#092332] flex items-center justify-between rounded-t-[10px]  ">

              <div className="flex-1 overflow-x-auto whitespace-nowrap space-x-8 scrollbar-hide">
                <div className="flex items-center space-x-4 md:space-x-6 ">
                  <div className="bg-[#E6E6E6] rounded-t-[9px] px-[12px] py-[12px] flex items-center gap-2">
                    <Image src={Chaticon} alt="Chat Icon" className="w-5 h-5" />
                    <span className="text-[14px] text-[#343434] md:pr-0 pr-[20px]">Chat</span>
                  </div>
                  <div className="px-[14px] py-[12px] flex items-center gap-2">
                    <Image src={Searchicon} alt="Search Icon" className="w-5 h-5" />
                    <span className="text-[14px] text-white">Search</span>
                  </div>
                  <div className="px-[14px] py-[12px] flex items-center gap-2">
                    <Image src={Database} alt="Database Icon" className="w-5 h-5" />
                    <span className="text-[14px] text-white">Database</span>
                  </div>
                  <div className="px-[14px] py-[12px] flex items-center gap-2 ">
                    <Image src={Virtual} alt="Virtual Assistance Icon" className="w-5 h-5" />
                    <span className="text-[14px] text-white pr-[10px]">Virtual Assistance</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="pr-[14px]">
                <Image src={Framelast} alt="Profile Icon" className="w-8 h-8" />
              </div>
            </div>

            {/* <div className="bg-[#092332] flex cursor-pointer overflow-auto sm:hidden block  rounded-t-[10px] items-center   md:justify-between">
                <div className="bg-[#E6E6E6] rounded-t-[9px] md:px-[14px] px-[25px] py-[12px] flex items-center gap-2">
                  <Image src={Chaticon} alt="Group2 bg-image " className="" />
                  <span className="text-[14px] text-[#343434]">Chat</span>
                </div>
                  <div className="md:px-[14px] px-[25px] py-[16px] flex items-center gap-2">
                    <Image src={Searchicon} alt="Group2 bg-image " className="" />
                    <span className="text-[14px] text-[#ffffff]">Search</span>
                  </div>
                  <div className="md:px-[14px] px-[25px] py-[16px] flex items-center gap-2">
                    <Image src={Database} alt="Group2 bg-image " className="" />
                    <span className="text-[14px] text-[#ffffff]">Database</span>
                  </div>
                  <div className="md:px-[14px] px-[25px] py-[16px] flex items-center gap-2">
                    <Image src={Virtual} alt="Group2 bg-image " className="" />
                    <span className="text-[14px] text-[#ffffff]">Virtual
                      Assistance</span>
                  </div>
              
              <div className="pr-[14px] absolute right-[-20px] top-[50px]">
                <Image src={Framelast} alt="Group2 bg-image " className="" />
              </div>
            </div> */}





            <div className="bg-[#E6E6E6] rounded-b-[10px]">
              <div className=" py-[16px] px-[24px] ">


                <div className=" border border-[#2D9CDB] rounded-[8px] overflow-hidden">
                  <div className="flex p-2">
                    <input
                      type="text"
                      className="flex-1 py-2 text-[#7E7E84] focus:outline-none "
                      placeholder="Enter your legal question"
                    />

                    {/* <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 px-4 py-2 h-[33px] mt-[3.5px] bg-[white] border border-[#73BDE7] rounded-[20px] text-gray-600 ml-2"
              >
                Jurisdiction: Filter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48  border border-gray-300 rounded-md shadow-lg z-20">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">India</button>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                      United States
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                      United Kingdom
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Canada</button>
                  </div>
                </div>
              )}
                   </div> */}



                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 ml-2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
              <div className="pb-[16px] px-[24px] md:gap-0 gap-3 flex flex-wrap items-center justify-between">
                <span className="bg-[#99D0CA] py-[10px] border border-[#00897B] px-[12px] rounded-[5px] text-[#343434] text-[14px]">
                  Summarize the case
                </span>
                <span className="bg-[#99D0CA] py-[10px] border border-[#00897B] px-[12px] rounded-[5px] text-[#343434] text-[14px]">
                  Ask same question with new jurisdiction
                </span>
                <span className="bg-[#99D0CA] py-[10px] border border-[#00897B] px-[12px] rounded-[5px] text-[#343434] text-[14px]">
                  Draft a memo  based in this output
                </span>
                <span className="bg-[#99D0CA] py-[10px] border border-[#00897B] px-[12px] rounded-[5px] text-[#343434] text-[14px]">
                  Summarize the case
                </span>
              </div>

            </div>
          </div>
          <div className="flex justify-center items-center mt-[48px] md:mb-0 mb-[60px]">
            <div className="flex md:gap-8 gap-4 text-center">
              <button className="cursor-pointer px-[20px] py-[16px] rounded-[6px] bg-[#2D9CDB] text-[#F6F6F6] md:text-[16px]  font-bold">
                Get Your Free Trial
              </button>
              <button className="cursor-pointer text-[#1B1B1B] border border-[#343434] px-[20px] py-[16px] rounded-[6px] text-[16px] font-bold">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </div>



      <Slider />

      <div className="bg-[#ffffff]">
        <div className="sm:block  hidden max-w-[1240px]  gap-3  xl:px-0 px-[20px] mx-auto md:py-[80px] py-[40px] md:flex justify-between ">
          <div className="max-w-[427px] my-auto ">
            <h4 className="text-[36px] text-[#1B1B1B] leading-[36px] ">
              Gojuris Chatbot
            </h4>
            <p className="text-[#1B1B1B] text-[16px] pb-[18px] font-poppins leading-[26px] pt-[12px]">
              The Gojuris Chatbot is trained on 1 crore+ Indian legal cases and
              delivers precise answers
            </p>

            <ul className="list-disc pl-[28px] border-t-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                Smart Case Summaries
              </li>
            </ul>

            <ul className="list-disc pl-[28px] border-t-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                Document Analyzer
              </li>
            </ul>

            <ul className="list-disc pl-[28px] border-t-[1px] border-b-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                AI Document Review
              </li>
            </ul>
            <div className="py-[15px] mt-[32px] cursor-pointer max-w-[142px] rounded-[6px] text-[16px] font-bold bg-[#2D9CDB] text-[#F6F6F6] px-[20px]">
              Explore More
            </div>
          </div>
          <div className="md:my-auto md:mt-0 mt-[22px] ">
            {/* <Image src={Group2} alt="Group2 bg-image " className="" /> */}
            <div className="w-[610px] h-[400px] ">
              <video
                src="/assets/Ask Question First.mp4" // Path to the video in your public folder
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[8px] border
         border-[#15587D]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E6E6E6] sm:block hidden">
        <div className="max-w-[1240px] xl:px-0 px-[20px] mx-auto md:py-[80px] py-[40px] md:flex justify-between gap-3">
          <div className="md:my-auto  ">
            <Image src={Group3} alt="Group3 bg-image " className="border rounded-[14px] border-[#15587D]" />

          </div>
          <div className="max-w-[422px]  my-auto">
            <h4 className="text-[36px] text-[#1B1B1B] leading-[36px] ">
              AI-Driven Case Search
            </h4>
            <p className="text-[#1B1B1B] text-[16px] pb-[18px] font-poppins leading-[26px] pt-[12px]">
              Stop scrolling through endless databases. Gojuris offers:
            </p>
            <ul className="list-disc pl-[28px] border-t-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                Citation search
              </li>
            </ul>
            <ul className="list-disc pl-[28px] border-t-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                Statutes wise search
              </li>
            </ul>
            <ul className="list-disc pl-[28px] border-t-[1px] border-b-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                Advance search
              </li>
            </ul>
            <div className="py-[15px] mt-[32px] cursor-pointer max-w-[142px] rounded-[6px] text-[16px] font-bold bg-[#2D9CDB] text-[#F6F6F6] px-[20px]">
              Explore More
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] sm:block hidden">
        <div className="max-w-[1240px] xl:px-0 px-[20px] mx-auto md:py-[80px] py-[40px] md:flex justify-between gap-3">
          <div className="max-w-[422px] my-auto">
            <h4 className="text-[36px] text-[#1B1B1B] leading-[36px] ">
              Mobile application
            </h4>
            <p className="text-[#1B1B1B] text-[16px] pb-[18px] font-poppins leading-[26px] pt-[12px]">
              Access your AI legal assistant anytime, anywhere.
            </p>

            <ul className="list-disc pl-[28px] border-t-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                iOS & Android Apps
              </li>
            </ul>

            <ul className="list-disc pl-[28px] border-t-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                Voice Search
              </li>
            </ul>

            <ul className="list-disc pl-[28px] border-t-[1px] border-b-[1px] border-[#b3b3b3]">
              <li className="italic py-[8px] text-[14px] font-[400] leading-[26px] text-[#66B8B0] ">
                Offline Mode
              </li>
            </ul>

            <button className="py-[15px] mt-[32px] cursor-pointer  rounded-[6px] text-[16px] font-bold bg-[#2D9CDB] text-[#F6F6F6] px-[20px]">
              Download
            </button>
          </div>
          <div className=" md:mt-0 mt-[22px] ">
            <div className="w-[610px] h-[400px]">
              <video
                src="/assets/Mobile App Animation.mp4" // Path to the video in your public folder
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[8px] border  border-[#15587D]"
              />
            </div>
            {/* <Image src={Group4} alt="Group3 bg-image " className="" /> */}
            {/* <Image
              src={Group5}
              alt="Group3 bg-image "
              className="absolute bottom-[10px] right-[16px]"
            /> */}
          </div>
        </div>
      </div>

      <div
        id="low-points"
        className="sm:bg-[#E6E6E6] bg-[#ffffff] md:py-[80px] py-[40px] "
      >
        <div className="max-w-[1240px] mx-auto xl:px-0 px-[20px] ">
          <div className=" pb-[34px]">
            <h2 className="sm:leading-[60px] text-[#16151f] sm:text-[56px] text-[36px] font-medium text-center">
              Latest Law-Points
            </h2>
            <p className="pt-[14px] font-normal text-[16px] leading-[26px] text-[#000000] text-center mx-auto max-w-[663px] ">
              Discover critical points of law in simplified terms. Whether you
              re a professional, student, or entrepreneur, these insights keep
              you informed and ahead.
            </p>
          </div>
        </div>
        <div className=" ">
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scroll-smooth mx-auto"
          >
            <div className="flex items-center gap-5 w-max ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="sm:bg-[#FAFAFA]  bg-[#E6E6E6] border border-[#BCBBC0] p-[22px] rounded-[10px] max-w-[300px] sm:max-w-[535px]"
                >
                  <h6 className="text-[#33A195] text-[22px] font-bold line-clamp-2 ">
                    {item.title}
                  </h6>
                  <p className="text-[14px] font-medium text-[#323232] italic py-[10px] truncate line-clamp-1 ">
                    {item.caseDetail}
                  </p>
                  <p className="text-[16px] leading-[26px] sm:text-[#7E7E84] text-[#343434] line-clamp-4">
                    {item.description}
                  </p>

                  <div className="underline text-[#2D9CDB] text-[16px] pt-[10px] pb-[20px] font-medium">
                    <Link href="/latestLawPoints"> Read More </Link>
                  </div>

                  <div className="sm:flex gap-5 ">
                    <div className="flex items-center sm:mb-0 mb-[14px] sm:bg-[#E6E6E6] bg-[#CCCCCC]   sm:justify-between gap-2 border border-[#B3B3B3] px-[8px] py-[4px] rounded-[6px]">
                      <Image src={Uiw} alt="Jda bg" className="" />
                      <div className="text-[#343434] text-[14px]">
                        {item.date}
                      </div>
                    </div>

                    <div className=" border border-[#B3B3B3] px-[8px] sm:bg-[#E6E6E6] bg-[#CCCCCC] py-[4px] rounded-[6px]">
                      <div className="text-[#343434] text-[14px] flex items-center sm:justify-between gap-2">
                        <Image src={Map} alt="Jda bg" className="" />
                        SUPRIME COURT OF INDIA
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-x-auto scroll-smooth mx-auto ">
            <div className="flex items-center gap-4 pt-[22px] w-max">
              {data2.map((item, index) => (
                <div
                  key={index}
                  className="sm:bg-[#FAFAFA]  bg-[#E6E6E6] border border-[#BCBBC0] p-[22px] rounded-[10px] max-w-[300px] sm:max-w-[535px]"
                >
                  <h6 className="text-[#33A195] text-[22px] font-bold line-clamp-2">
                    {item.title}
                  </h6>
                  <p className="text-[14px] font-medium text-[#323232] italic my-[10px] line-clamp-1 ">
                    {item.caseDetail}
                  </p>
                  <p className="text-[16px] leading-[26px] sm:text-[#7E7E84] text-[#343434] line-clamp-4 ">
                    {item.description}
                  </p>

                  <div className="underline text-[#2D9CDB] text-[16px] pt-[10px] pb-[20px] font-medium">
                    <Link href="/latestLawPoints"> Read More </Link>
                  </div>

                  <div className="sm:flex gap-5 ">
                    <div className="flex items-center sm:mb-0 mb-[14px] sm:bg-[#E6E6E6] bg-[#CCCCCC]   sm:justify-between gap-2 border border-[#B3B3B3] px-[8px] py-[4px] rounded-[6px]">
                      <Image src={Uiw} alt="Jda bg" className="" />
                      <div className="text-[#343434] text-[14px]">
                        {item.date}
                      </div>
                    </div>

                    <div className=" border px-[8px] border-[#B3B3B3] sm:bg-[#E6E6E6] bg-[#CCCCCC] py-[4px] rounded-[6px]">
                      <div className="text-[#343434] text-[14px] flex items-center sm:justify-between gap-2">
                        <Image src={Map} alt="Jda bg" className="" />
                        SUPRIME COURT OF INDIA
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-[50px] bg-[#2D9CDB] rounded-[6px] py-[12px] text-[#F6F6F6] text-[14px] font-bold max-w-[100px] mx-auto">
            <Link href="/latestLawPoints">Explore</Link>
          </div>
        </div>

      </div>

      <div id="cases" className="sm:bg-[#ffffff] bg-[#E6E6E6] py-12 ">
        <div className="max-w-[1240px] mx-auto xl:px-0 px-[20px] ">
          <div className=" pb-[34px]">
            <h2 className="sm:leading-[60px] text-[#16151f] sm:text-[56px] text-[36px] font-medium text-center">
              Latest Cases
            </h2>
            <p className="pt-[14px] font-normal text-[16px] leading-[26px] text-[#000000] text-center mx-auto max-w-[663px] ">
              Our AI curates case summaries so you can focus on what matters.
              Deep-dive into decisions, find relevant judgments, and save time.
            </p>
          </div>
        </div>
        <div
          ref={scrollRef1}
          className="w-[full] overflow-x-auto  mx-auto scroll-smooth"
        >
          <div className="flex items-center gap-4 w-max">
            {cases.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff] sm:bg-[#E6E6E6]  p-[18px] border-[#B3B3B3] border md:border-[#BCBBC0] rounded-[10px] sm:max-w-[530px] max-w-[320px]"
              >
                <p className="text-[16px] leading-[26px] text-[#343434] line-clamp-3">
                  {item.title}
                </p>

                <div className="underline text-[#2D9CDB] text-[16px] pt-[10px] pb-[20px] font-medium">
                  <a href="/latestCases">Read More</a>
                </div>

                <div className="sm:flex gap-3 ">
                  <div className="flex items-center sm:mb-0 mb-[14px] bg-[#E6E6E6] sm:bg-[#CCCCCC] gap-3 border border-[#B3B3B3] px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Uiw} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      {item.date}
                    </div>
                  </div>

                  <div className="flex items-center  bg-[#E6E6E6] sm:bg-[#CCCCCC] gap-3 border border-[#B3B3B3] px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Courtic} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      SUPRIME COURT OF INDIA
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[full] overflow-x-auto  mx-auto scroll-smooth">
          <div className="flex items-center mt-[18px] gap-5 w-max">
            {cases2.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff]  sm:bg-[#E6E6E6] border border-[#BCBBC0] p-[18px] rounded-[10px] sm:max-w-[530px]  max-w-[320px]"
              >
                <div>
                  <p className="text-[16px] leading-[26px] text-[#343434] line-clamp-3">
                    {item.title}
                  </p>

                  <div className="underline text-[#2D9CDB] text-[16px] pt-[10px] pb-[20px] font-medium">
                    <a href="/latestCases">Read More</a>
                  </div>

                  <div className="sm:flex gap-3 ">
                    <div className="flex border-[#B3B3B3] items-center sm:mb-0 mb-[14px] bg-[#E6E6E6] sm:bg-[#CCCCCC]  gap-3 border px-[8px] py-[4px] rounded-[6px]">
                      <Image src={Uiw} alt="Jda bg" className="" />
                      <div className="text-[#343434] text-[14px]">
                        {item.date}
                      </div>
                    </div>

                    <div className="flex border-[#B3B3B3] items-center  bg-[#E6E6E6] sm:bg-[#CCCCCC] gap-3 border px-[8px] py-[4px] rounded-[6px]">
                      <Image src={Courtic} alt="Jda bg" className="" />
                      <div className="text-[#343434] text-[14px]">
                        SUPRIME COURT OF INDIA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-[50px] bg-[#2D9CDB] rounded-[6px] py-[12px] text-[#F6F6F6] text-[14px] font-bold max-w-[100px] mx-auto">
          <Link href="/latestCases">Explore</Link>
        </div>
      </div>

      <div
        id="amendments"
        className="sm:bg-[#E2E2E4] bg-[#ffffff] md:py-12 py-6 "
      >
        <div className="max-w-[1240px] mx-auto xl:px-0 px-[20px] ">
          <div className=" pb-[34px]">
            <h2 className="sm:leading-[60px] text-[#16151f] sm:text-[56px] text-[36px] font-medium text-center">
              Latest Amendments
            </h2>
            <p className="pt-[14px] font-normal text-[16px] leading-[26px] text-[#000000] text-center mx-auto max-w-[663px] ">
              Access the latest amendments and understand their implications
              with ease. Don’t let legal changes catch you off guard—our AI
              simplifies it all.
            </p>
          </div>
        </div>
        <div
          ref={scrollRef2}
          className="w-full overflow-x-auto scroll-smooth mx-auto"
        >
          <div className="flex items-center gap-4 w-max">
            {latest.map((item, index) => (
              <div
                key={index}
                className="sm:bg-[#FAFAFA] border  border-[#BCBBC0] bg-[#E6E6E6] p-[16px] rounded-[10px] sm:max-w-[420px] max-w-[361px]"
              >
                <p className="text-[16px] leading-[26px] text-[#343434] line-clamp-2">
                  {item.title}
                </p>
                <div className="flex gap-4 mt-[12px] ">
                  <div className="flex items-center border-[#B3B3B3] sm:bg-[#E6E6E6] bg-[#CCCCCC] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Uiw} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      20 Jan 2025
                    </div>
                  </div>

                  <div className="flex border-[#B3B3B3] items-center sm:bg-[#E6E6E6] bg-[#CCCCCC] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Courtic} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      Jammu and kashmir
                    </div>
                  </div>
                </div>

                <div className=" hover:bg-[#2D9CDB] bg-[#f2f2f2] duration-500 cursor-pointer mt-[18px] sm:rounded-[6px] py-[6px] text-center text-[#000000] font-bold ">
                  <Link href="/latestAmendments">Read</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-auto scroll-smooth mx-auto">
          <div className="flex items-center gap-4 mt-[16px] w-max">
            {latest2.map((item, index) => (
              <div
                key={index}
                className="sm:bg-[#FAFAFA] border border-[#BCBBC0] bg-[#E6E6E6] p-[16px] rounded-[10px] sm:max-w-[420px] max-w-[361px]"
              >
                <p className="text-[16px] leading-[26px] text-[#343434] line-clamp-2">
                  {item.title}
                </p>
                <div className="flex gap-4 mt-[12px] ">
                  <div className="flex border-[#B3B3B3] items-center sm:bg-[#E6E6E6] bg-[#CCCCCC] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Uiw} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      20 Jan 2025
                    </div>
                  </div>

                  <div className="flex border-[#B3B3B3] items-center sm:bg-[#E6E6E6] bg-[#CCCCCC] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                    <Image src={Courtic} alt="Jda bg" className="" />
                    <div className="text-[#343434] text-[14px]">
                      Jammu and kashmir
                    </div>
                  </div>
                </div>

                <div className=" hover:bg-[#2D9CDB] bg-[#f2f2f2] duration-500 cursor-pointer mt-[18px] sm:rounded-[6px] py-[6px] text-center text-[#000000] font-bold ">
                  <Link href="/latestAmendments">Read</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-[50px] bg-[#2D9CDB] py-[12px] text-[#F6F6F6] rounded-[6px] text-[14px] font-bold max-w-[100px] mx-auto">
          <Link href="/latestAmendments">Explore</Link>
        </div>
      </div>

      <div
        id="news"
        className="sm:bg-[#FAFAFA] bg-[#ffffff] xl:px-0 px-[20px] "
      >
        <div className="max-w-[1240px] mx-auto md:py-[80px] py-[40px] ">
          <div className="flex justify-between items-center">
            <h4 className="sm:text-[54px] text-[44px] text-[#16151F] font-medium">
              News
            </h4>
            <Link href="/news">
              <div className="bg-[#16151F] text-[14px] py-[12px] px-[20px] font-bold text-[#F6F6F6]  ">
                View All
              </div>
            </Link>
          </div>

          <div className="mt-[40px]">
            <div className="grid my-[20px] sm:my-[48px] gap-4 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => (
                <Link key={index} href={`/news/${index}`}>
                  <div className="border-[1px] bg-[#e6e6e6] border-[#BCBBC0] rounded-[10px] p-2 cursor-pointer">
                    <Image
                      src={item.imageUrl}
                      alt={item.heading}
                      className="w-full h-[200px] object-cover rounded-[10px]"
                      width={382}
                      height={200}
                    />
                    <h3 className="text-lg px-2 font-[16px] mt-2 line-clamp-2">
                      {item.heading}
                    </h3>

                    <div className="flex justify-between p-[6px] mt-[10px]">
                      <div className="flex items-center bg-[#CCCCCC] border-[#bcbbc0] justify-between gap-3 border px-[8px] py-[4px] rounded-[6px]">
                        <Image src={News1} alt="" />
                        <div className="text-[#343434] text-[14px]">
                          {item.date}
                        </div>
                      </div>
                      <div className="bg-[#2D9CDB] cursor-pointer text-[14px] text-[#F6F6F6] font-bold px-[12px] py-[7px] rounded-[6px]">
                        Read More
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        id="form"
        className="bg-[#E2E2E4] sm:py-[80px] py-[40px] xl:px-[0px] px-[20px] "
      >
        <div className="max-w-[1240px] mx-auto ">
          <h2 className="text-[#16151F] sm:leading-[60px] md:text-[56px] text-[36px] font-medium ">
            Sign Up For Your Free Legal AI Trial Today!
          </h2>
          <p className="text-[16px] text-[#323232] leading-[26px] py-[16px] max-w-[836px]">
            Experience the future of legal research and assistance. Try our
            AI-powered legal assistant for free and discover how simple the law
            can be.
          </p>
          <h4 className="sm:text-[36px] text-[#16151f] text-[28px] font-medium pb-[16px]">
            Fill out the form
          </h4>
          <p className="text-[16px] text-[#323232] leading-[26px] max-w-[736px]">
            Legal AI rep will reach out to schedule your free trial activation.
            The trial is 4 day in duration.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto shadow-sm">
          <Contact />
        </div>

        <div className="max-w-[1240px] mx-auto  ">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <p className="text-[16px] text-[#323232] leading-[26px] py-[22px] ">
              By submitting, you agree to Legal AI{" "}
              <span className="underline font-bold cursor-pointer">
                Terms of Use
              </span>
            </p>
          </div>

          <p className="text-[16px] text-[#323232] leading-[26px] pb-[22px]">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="underline font-bold cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="underline font-bold cursor-pointer">
              Terms of Service
            </span>{" "}
            apply.
          </p>
          <p className="text-[16px] text-[#323232] leading-[26px] ">
            Legal AI a division of RELX Inc., may contact you in your
            professional capacity with information about our other products,
            services, and events that we believe may be of interest. You can
            manage your communication preferences via our
            <span className="underline font-bold cursor-pointer">
              Preference Center.
            </span>{" "}
            You can learn more about how we handle your personal data and your
            rights by reviewing our
            <span className="underline font-bold cursor-pointer">
              Privacy Policy.{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

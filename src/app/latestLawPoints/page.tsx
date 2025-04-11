"use client";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Uiw from "../../../public/assets/Vector (8).png";
import Map from "../../../public/assets/map_courthouse (1).png";

import Image from "next/image";

export default function NewsPage() {


  const data = [
    {
      title: "Prevention of Corruption Act -- Bribery charges require clear proof of demand and acceptance -- Chemical tests alone do not prove guilt – corroborative evidence of demand and acceptance is required -- Courts will not apply the presumption under Section 20 unless demand is first established beyond reasonable doubt.",
      caseDetail: "[Madan Lal vs. State of Rajasthan, 2025 Legal Eagle 280]",
      description:
        "Prevention of Corruption Act, 1988; Ss. 7(2), 13(i)(d), 13(2) — Code of Criminal Procedure, 1973; S. 164 — Failure to Prove Demand and Acceptance of Bribe in a Trap Case — Was the prosecution able to prove beyond reasonable doubt that the accused demanded and accepted the bribe — Did the inconsistencies in witness statements raise reasonable doubt regarding the guilt of the accused — Was the presumption under Section 20 of the Prevention of Corruption Act applicable — Different versions about the exact amount of bribe demanded by the accused — Contradictions between the initial complaint and deposition in court — They did not witness the accused accepting the bribe — Testified that currency notes were scattered on the floor, contradicting the trap team’s claims — PW 3 (Inspector) and PW 4 (Constable) claimed to have seen the bribe being handed over — However, independent witnesses (PW 1 & PW 2) confirmed they arrived after the signal was given, meaning they did not witness the transaction — PW 6 (office employee) and PW 7 (auto driver) did not support the prosecution’s case — Presumption of guilt arises only if demand is established — Since the demand itself was doubtful, the presumption under Section 20 did not apply — Conviction Set Aside — Accused acquitted as prosecution failed to prove demand and acceptance beyond reasonable doubt — Presumption under Section 20 not applied due to lack of clear demand evidence — Bail Bonds Cancelled — No further punishment for the accused."
    },
    {
      title: "Service Law -- No vested right to appointment exists for selected candidates unless the process is complete and approved -- Governments can cancel a recruitment process if it is tainted by serious irregularities. ",
      caseDetail: "[State of Assam & Ors. vs. Arabinda Rabha & Ors., 2025 Legal Eagle 281]",
      description:
        "Service Law — Recruitment, selection, and cancellation of appointments — Validity of Government’s Cancellation of Recruitment Process Due to Alleged Irregularities Was the cancellation of the recruitment process arbitrary, unreasonable, or disproportionate under the Wednesbury unreasonableness and proportionality doctrines — Did the selected candidates have an indefeasible right to appointment — Did the High Court err in directing the continuation of the selection process — Candidates do not acquire an indefeasible right to appointment just by being included in the select list (Shankarsan Dash case) — Government has discretion to cancel recruitment, provided the decision is fair and non-arbitrary — Wednesbury unreasonableness test — The decision was not irrational or arbitrary — Proportionality test — Cancellation was proportionate to the seriousness of the irregularities, which affected merit-based selection, reservation, and fair representation — High Court acted beyond judicial review by substituting its own decision instead of assessing whether the Government acted arbitrarily — Courts should not interfere in policy decisions unless they are mala fide, arbitrary, or unreasonable — While cancellation was justified, relief was granted Age relaxation for affected candidates to apply in the fresh recruitment — Minor deficiencies in physical tests to be waived, considering the time lapse — Further relaxations left to the PCCF’s discretion — Appeal Allowed — Assam Government’s decision upheld — High Court’s judgment quashed — Direction to continue selection was set aside — Fresh recruitment to be conducted with relaxations for affected candidates."
    },
    {
      title: "IPC and POCSO Act can be applied together when punishment under IPC is stricter -- High Court cannot enhance punishment in an appeal by the accused unless the prosecution also appeals -- Victim compensation is an essential part of justice in sexual assault cases.",
      caseDetail: "[Gyanendra Singh @ Raja Singh vs. State of U.P., 2025 Legal Eagle 282]",
      description:
        "Indian Penal Code, 1860; Ss. 376(2)(f), 376(2)(i) — Protection of Children from Sexual Offences (POCSO) Act, 2012; Ss. 3, 4, 5, 42A, 42 — Applicability of IPC and POCSO Act in Child Sexual Assault Cases and Scope of Judicial Discretion in Sentencing — Whether the accused could be convicted under both IPC and POCSO Act for the same offence — Whether the High Court erred in modifying the sentence to life imprisonment for the remainder of the appellant’s natural life — Whether the High Court could enhance the punishment without an appeal from the prosecution; S. 42 of POCSO Act states that whichever law (IPC or POCSO) prescribes a greater sentence shall apply — IPC prescribes a higher sentence (life imprisonment for natural life) than POCSO — There is no inconsistency between IPC and POCSO; rather, they are complementary — Trial Court awarded life imprisonment but did not specify till the remainder of natural life — High Court's modification increased the severity of the sentence, making it effectively an enhancement, which is impermissible without a prosecution appeal — Precedents (Swamy Shraddhananda, Navas v. State of Kerala) allow fixed-term sentencing, which the High Court did not consider — Supreme Court restored the original trial court’s sentence of life imprisonment without specifying remainder of natural life — Fixed fine of ₹5,00,000 imposed; in default, two years additional imprisonment — Clarified that the sentence under IPC takes precedence over POCSO due to the greater punishment — Conviction under IPC and POCSO upheld — High Court’s enhancement of remainder of natural life sentence set aside — Restored Trial Court’s sentence of life imprisonment (without natural life stipulation) — Fine of ₹5,00,000 imposed, payable to the victim — Both sentences to run concurrently — Appeal partially allowed."
    },
    {
      title: "IPC and POCSO Act can be applied together when punishment under IPC is stricter -- High Court cannot enhance punishment in an appeal by the accused unless the prosecution also appeals -- Victim compensation is an essential part of justice in sexual assault cases.",
      caseDetail:
        "[Gyanendra Singh @ Raja Singh vs. State of U.P., 2025 Legal Eagle 282]",
      description:
        "Indian Penal Code, 1860; Ss. 376(2)(f), 376(2)(i) — Protection of Children from Sexual Offences (POCSO) Act, 2012; Ss. 3, 4, 5, 42A, 42 — Applicability of IPC and POCSO Act in Child Sexual Assault Cases and Scope of Judicial Discretion in Sentencing — Whether the accused could be convicted under both IPC and POCSO Act for the same offence — Whether the High Court erred in modifying the sentence to life imprisonment for the remainder of the appellant’s natural life — Whether the High Court could enhance the punishment without an appeal from the prosecution; S. 42 of POCSO Act states that whichever law (IPC or POCSO) prescribes a greater sentence shall apply — IPC prescribes a higher sentence (life imprisonment for natural life) than POCSO — There is no inconsistency between IPC and POCSO; rather, they are complementary — Trial Court awarded life imprisonment but did not specify till the remainder of natural life — High Court's modification increased the severity of the sentence, making it effectively an enhancement, which is impermissible without a prosecution appeal — Precedents (Swamy Shraddhananda, Navas v. State of Kerala) allow fixed-term sentencing, which the High Court did not consider — Supreme Court restored the original trial court’s sentence of life imprisonment without specifying remainder of natural life — Fixed fine of ₹5,00,000 imposed; in default, two years additional imprisonment — Clarified that the sentence under IPC takes precedence over POCSO due to the greater punishment — Conviction under IPC and POCSO upheld — High Court’s enhancement of remainder of natural life sentence set aside — Restored Trial Court’s sentence of life imprisonment (without natural life stipulation) — Fine of ₹5,00,000 imposed, payable to the victim — Both sentences to run concurrently — Appeal partially allowed."
    },
    {
      title: "Examination Fraud Case -- Cancellation of Bail -- Granting bail in serious fraud cases must consider the societal impact -- Public faith in examinations must be protected against corruption.",
      caseDetail:
        "[State of Rajasthan vs. Indraj Singh etc., 2025 Legal Eagle 283]",
      description:
        "Indian Penal Code, 1860; Ss. 419, 420, 467, 468, 120B, 498-A, 304B — Rajasthan Public Examination (Prevention of Unfair Means) Act, 2022; Ss. 3, 10 — Cancellation of Bail Granted in Examination Fraud Case — Whether the High Court erred in granting bail to the accused despite the gravity of the offence — Whether the Trial Court’s decision to deny bail was justified in light of the allegations and their impact on society — What are the principles governing the setting aside of a bail order, and do they apply in the present case — Courts distinguish between setting aside an unjustified bail order and cancelling bail due to misconduct after release — Here, the grant of bail itself was legally unsustainable given the facts of the case (Mahipal v. Rajesh Kumar, 2020) — Public examinations are highly competitive, and fraudulent practices undermine the meritocratic system — A rigorous selection process must be free from manipulation to maintain public trust — Alleged acts were not just individual crimes but an attack on institutional integrity — Trial Court had rightly denied bail due to the seriousness of the allegations — High Court failed to consider financial transactions and documented impersonation attempts — Court reaffirmed that bail should not be revoked arbitrarily — However, where the grant of bail itself is perverse, superior courts must intervene (Ajwar v. Waseem, 2024) — Supreme Court allowed the appeal, setting aside the High Court’s bail order — Accused must surrender within two weeks before the trial court — Accused may reapply for bail after examination of material witnesses."
    },
    {
      title: "Conviction -- Testimony of the prosecutrix alone can be sufficient for conviction if credible -- Absence of injuries does not negate rape, as victims may be overpowered -- Delay in FIR is not fatal if satisfactorily explained.",
      caseDetail:
        "[Lok Mal @ Loku vs. State of Uttar Pradesh, 2025 Legal Eagle 284]",
      description:
        "Indian Penal Code, 1860; Ss. 376, 323, 504, 506 — Code of Criminal Procedure, 1973; S. 313 — Credibility of Sole Testimony of Prosecutrix in Rape Convictions — Whether the conviction under Section 376 and 323 IPC was justified based on the sole testimony of the prosecutrix — Whether the absence of injuries on the prosecutrix negates the occurrence of rape — Whether the prosecution’s delay in filing the FIR was fatal to the case — Whether the accused was falsely implicated due to enmity with the prosecutrix — Courts have repeatedly held that rape victim’s testimony is equivalent to an injured witness and does not require corroboration unless it is unreliable or contradictory (State of Punjab v. Gurmit Singh) — Prosecutrix’s statement was consistent, detailed, and credible — Relying on Bharwada Bhoginbhai Hirjibhai v. State of Gujarat, the Court reaffirmed that injuries are not mandatory in every rape case — Since the accused gagged and overpowered the prosecutrix, the absence of injuries is not a ground for acquittal — Prosecutrix’s family faced threats from the accused’s relatives, causing hesitation in lodging the complaint — Delay alone is not a ground for acquittal when the explanation is plausible — Moral character of the prosecutrix’s mother cannot be used to discredit the victim’s testimony — Accused failed to provide any evidence proving false implication — Supreme Court dismissed the appeal and affirmed the conviction under Section 376 and 323 IPC — Directed the State to consider remission as per policy, given the long passage of time (incident occurred in 1984, High Court judgment in 2010)."
    },
    {
      title: "Civil Law -- High Court cannot interfere with factual findings in a Second Appeal unless there is a substantial question of law -- An injunction suit is maintainable if the plaintiff has clear title and possession, even if the title is disputed by the defendants.",
      caseDetail:"[Ayyavu vs. Prabha and Others, 2025 Legal Eagle 277]",
      description:
        "Code of Civil Procedure, 1908; S. 100 — Dispute Over Land Ownership and Possession — Suit for Injunction and Mandatory Injunction — Whether the plaintiff (appellant) had rightful ownership and possession over the disputed portion (1¼ cents) of the suit land — Whether the defendants (respondents) could claim rights over the disputed land based on an alleged settlement deed in favor of the Gram Panchayat — Whether the High Court was justified in reversing the findings of the First Appellate Court on factual issues in a second appeal under Section 100 CPC — Whether the plaintiff’s suit for injunction was maintainable without seeking a declaratory relief regarding ownership — Sale deed dated 23.08.1988 (Exhibit-A1) clearly defined the boundaries of the purchased land — No evidence showed that Mariyammal retained ownership of the disputed 1¼ cents — Commissioner’s Report and Sketch confirmed that the disputed property fell within the plaintiff’s land — Exhibit-B8 was an unregistered document and had no legal effect in transferring title — Gram Panchayat could not claim ownership without proper legal conveyance; S. 100 CPC (Second Appeal) only allows intervention on substantial questions of law — High Court wrongly reappreciated factual findings, which were already settled by the First Appellate Court — No substantial question of law was involved; hence, the High Court’s decision was erroneous — Since the defendants had no valid title claim, a suit for injunction alone was sufficient — High Court erred in dismissing the suit on technical grounds — Appeal Allowed — High Court’s Judgment Set Aside — Trial Court’s Dismissal of the Suit Overturned — First Appellate Court’s Judgment Restoring Plaintiff’s Ownership Rights Reinstated — Plaintiff Granted Injunction Against Defendants."
    },
    {
      title: "Transfer of property -- Auction Sales in Liquidation Do Not Create New Rights – If a company holds defective title or no title, the auction purchaser cannot claim better rights than the company had.",
      caseDetail: "[Delhi Development Authority vs. S.G.G. Towers (P) Ltd. & Ors., 2025 Legal Eagle 278]",
      description:
        "Delhi Development Act, 1957; S. 22 — Delhi Development Authority (Disposal of Developed Nazul Land) Rules, 1981 — Rule 43 — Validity of Leasehold Rights and Property Transfer in Liquidation Proceedings — Whether M/s Mehta Constructions had any legal right, title, or interest in the plot under the lease agreement — Whether the sale by M/s Mehta Constructions to M/s Pure Drinks was valid despite no lease deed being executed — Whether the auction sale of the plot in the liquidation proceedings of M/s Pure Drinks conferred any legal ownership or leasehold rights to the auction purchaser (first respondent) — Whether the Delhi Development Authority (DDA) had a valid claim for unearned income from the auction sale proceeds — What remedies were available to the appellant (DDA) in light of the auction confirmation — Agreement to lease (1957) did not create ownership or leasehold rights until compliance was made and a lease deed executed — Since no lease deed was executed, M/s Mehta Constructions had no right to sell the plot in 1972 or 1985 — Auction was conducted on an as-is basis,  meaning the purchaser (first respondent) only got whatever rights M/s Pure Drinks had—which were non-existent — Auction did not amount to a fresh sale of the plot itself — DDA’s Claim for Unearned Income Could Not Be Enforced Against Liquidation Proceeds — Funds in liquidation were subject to multiple claims, including tax liabilities — Court could not direct payment of unearned income to DDA from the liquidation estate — DDA can initiate separate proceedings to recover possession of the plot or claim unearned income from the auction purchaser — If the auction purchaser (first respondent) wishes to regularize the transaction, it must apply to DDA and comply with legal requirements — Appeal dismissed, but with clarifications on legal rights:"
    }
  ];
  return (
    <div>
      <Header />

      <div className="">
        <div className=" py-[20px] text-center sm:py-[10px] px-[20px] sm:px-[100px] bg-[#e6e6e6]">
          <h1 className="text-[56px] mt-3 font-medium leading-[60px] mb-4">
            Latest Law-Points
          </h1>
          <p className="text-[16px] mt-3  leading-[26px] mb-4">
            Discover critical points of law in simplified terms. Whether you re
            a professional,
            <br /> student, or entrepreneur, these insights keep you informed
            and ahead.
          </p>
        </div>
        <div className="grid sm:px-[100px] px-[20px] my-[20px] sm:my-[48px] gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>

      <div className="flex justify-center mb-[24px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 w-max">
          {data.map((item, index) => (
            <div
              key={index}
              className="sm:bg-[#FAFAFA] bg-[#E6E6E6] p-[22px] border-[1px] border-[#b3b3b3] rounded-[10px] max-w-[361px] sm:max-w-[535px]"
            >
              <h6 className="text-[#33A195] text-[22px] font-bold line-clamp-2">
              {item.title}
              </h6>
              <p className="text-[14px] font-medium text-[#323232] italic my-[10px] line-clamp-1">
                {item.caseDetail}
              </p>
              <p className="text-[16px] leading-[26px]  sm:text-[#7E7E84] text-[#343434] line-clamp-4">
              {item.description}
              </p>

              <div className="underline text-[#2D9CDB] text-[16px] pt-[10px] pb-[20px] font-medium">
                Read More
              </div>

              <div className="sm:flex gap-5 ">
                <div className="flex items-center sm:mb-0 mb-[14px] sm:bg-[#E6E6E6] bg-[#CCCCCC]   sm:justify-between gap-2 border px-[8px] py-[4px] rounded-[6px]">
                  <Image src={Uiw} alt="Jda bg" className="" />
                  <div className="text-[#343434] text-[14px]">
                    Date of Decision 20 Jan 2025
                  </div>
                </div>

                <div className=" border px-[8px] sm:bg-[#E6E6E6] bg-[#CCCCCC] py-[4px] rounded-[6px]">
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
      <Footer />
    </div>
  );
}

---
layout: post
title: Some Thoughts on IAM 
date: 2026-02-16-20-38-42
categories: [Uncategorized]
---


Delving a bit more into IAM I recently listed to the Identity at the Center podcast episode #399 with Jim McDonald and Jeff Margolies.  Margolies is the Chief Product/Strategy Officer at Saviynt and was discussing identity in the age of AI.  Some of the interesting points that Margolies brought up were that AI/IAM will be bi-directional in that AI will be used to force multiply IAM but IAM will also be used to verify AI, agents, and non-human entities.  I think of particular interest is how AI agents that are spawned from a process will be verified/permitted, and what data they may or may not have access to because you have to not only verify the data but verify the permissions the agent has.  Furthermore how do you have visibility into what the agent does or accesses?  What is the provenance and/or chain of custody of an AI and subsequent agents?  Is there AI PAM?  

The other part that was interesting was noting that there are workforce constraints in that there aren't enough IAM practitioners.  I personally believe that's because there's no good pipeline into IAM as IAM is a somewhat niche and obfuscated subfield of cloud/SaaS.  With the growth of AI, so too will IAM grow.  Also the conversation around Identity/Security Posture Management was also interesting as it's an additional framework that can help enhance current IAM capabilities by allowing for additional IAM governance of entities as previously discussed.

I also read Guidepoint "Security's The State of Identity and Access Management (IAM) Maturity", and had some thought on it (notes found below).  My key takeaways are namely that I'm surprised at how manual everything still is within IAM (though how 'manual' something is, is up for debate/discussion) along with how few PAM implementations there are (and how many PAMs are tied to a single primary account).  The report shows that most orgs are in early to mid maturity for implementing IAM, and that the VAST majority of orgs are investing in AI, but I don't think they're ready, either from a framework, technology, or telemetry perspective, on how to handle AI.  It's also curious how many orgs are apparently using biometrics, but I suspect that's because those orgs are government, government adjacent, or have regulatory requirements. 

Bottom line is that AI investment will change things, especially in IAM, and how we work to authN and authZ non-human identities is likely going to need to change with the times, because it feels like IAM is being reactive in this case rather than proactive as I haven't seen many solutions out there dealing with AI IAM (not to say they don't exist, but I haven't seen the full spectrum of potential solutions).

```
### The State of Identity and Access Management (IAM) Maturity

- The defenition of "high performers" feels incredibly generic and incredibly variable because I am skeptical of self-reporting efficacy
```
High performers in this research are those organizations that self-report their IAM technologies and
investments are highly effective (23 percent)
```


- The fact that less than half of orgs use Identity verification solutions is concerning as there have been a number of impersonation attacks both AI based and based on "fake IT" professionals.
- Less than half of orgs relying on automated solutions to check for compromised passwords would seem to indicate a substantial number of orgs who are still on prem
- Another difference I'm curious about is the distinction between "IT Security" and IAM in this instance, but the slightly less than half (45%) of orgs saying that there's an issue of lack of resources shows the continued trend of security as a cost center/after thought
- There's a continued rise in machine/non-human accounts, and large swaths of them appear to be on a case-by-case or manual basis (~72% have policies set up for non-human accounts)
- The vast majority are performing access reviews via IAM platforms, most are using spreadsheets or custom workflows which is surprising, which also leads into the fact that most JML is manual
- PAM is still lacking as about half find IAM/PAM platforms effective for their needs
- I think this also brings up the question of what constitutes "manual" within the tech/IAM space.  Is a ticket that fires off a request and is presented to an IAM analyst to approve/disapprove it "manual".  How much automation is needed to count towards automation?
- Phishing is still a big issue impacting approximately a quareter of respondents, but leaked creds compromise a third of the issue as well
  - Does simply having usernames leaked qualify, because does a username + password constitute a full credential or is just the username enough?

- One of the impacts that the report lists is "decline in reputation" and "decline in trustworthiness" which are separate and distinct, however I'm curious as to how those would be quantified and or drilled down on in a deeper analysis.
- I'm just honestly more surprised that costs of consultants/attourneys, and regulatory fines aren't higher on the impacts list, but loss of workforce productivity impacting about 40% of folks is pretty dang impactful.
- Over half of orgs say that they lak the technologies, and in-house expertise to implement identity based solutions which speaks to a large opportunity for IAM expertise.  But I also think it's closely tied with just UNDER half saying that it's lack of resources keeping them from implementing solutions and a full third saying executive support/not a priority is an opportunity space as well.
- IAM = User experience, I think this is key because of how frustrating standard passwords can be, but I'm also suprprised by how much org change drives IAM security investment, as the previous point of not having in house experience would seem to be driven by constant organizational changes and instability.  Improved user experience though can drive down costs not just in terms of monetary value, but time cost, opportunity cost, ease of integration etc...
- Lifecycle management is still a big issue from BOTH a JML persepctive and an AuthN and an AuthZ perspective
- How much will AI and agent based AI systems drive IAM to manage non-human accounts?  What's the telemetry like for AI based systems using IAM and getting access?
- More and more what I'm getting from this report is that there are still a lot of pain and friction points in IAM and user access in terms of telemetry, logs/access reviews, and features/usability.  Because access reviews still being done manually is surprising utilizing spreadsheets etc...
- So apparently there are refreshes in moving to the cloud/SaaS, but how effective and impactful will that be?  What are the underlying problems that will still exist, there's a shiny new SaaS/IAM toy, but does it fix the problems needed?
- The thing that also keeps repeatedly popping up is how many orgs rely on manual processes.
- PAM apparently still isn't much of a thing in the IAM space as almost half of orgs have priv access assigned permanently.
- Ok, so it seems like the IAM space is pretty fragmented AND that processes aren't really in place for orgs, ESPECIALLY in light of only ~20% of orgs having fully implemented passwordless authN.
- Since a barrier to implementing passwordless AuthN, how can it be framed as a cost savings, especially in light of the previous findings that security incidents cost money in terms of legal expenses, loss of reputation, etc...?
- Also I'm curious as to what security risks orgs are finding with Passwordless auth?  Complexity being a barrier makes sense with lack of in-house expertise.
- At least most orgs have MFA (in some capacity)
- The fact that half of orgs are using biometrics in some capacity is surprising given the other findings, because I'm wondering what the cost for implementation and management of that in and of itself is along with how they got buy in from management.  Also, some of these make me think a good portion of the orgs surveyed were government or government adjacent.
- With a lot of the frameworks and tools that are mentioned IGA, ISPM, ITDR, etc... I notice that a lot of respondents say they will be implemented in X time, but no org responded saying "we will not be implementing this", that seems like a real limitation in the questionaire.
- Wow, 94% of respondents are going to invest in AI in some capacity, that's an incredible vote of confidence in AI from orgs, or they're just afraid of missing out.
- Passwords and lack of security is a bottleneck I hadn't considered, passwords as tech debt, weird.  But I'm definitely more concerned about half of respondents not having the necessary security measures in place for Customer based IAM.
- The orgs that have effective tools and investments experiencing fewer security incidents seems like a fairly obvious finding, but what were the identity based security incidents in those orgs that WERE well resourced enough AND had the right tools?
- I think the foundation of "high performers" in this case is really just a proxy for those orgs that have management buy in and are well resourced enough.  How do you reach the orgs that don't have those advantages, and what wins can be offered to them?  Because from what I'm seeing it seems like the easiest win is automated password checking.
- As a strange result, I'm wondering why 'high preformers' aren't using temporary privleged access assignments or secondary accounts and primary account privleged access is a thing.
- Again, 'high performers' adopting new technolgies and frameworks doesn't seem to be shocking given their impled support and resources.
- Wow, a 3.7% response rate is pretty rough and I'm not sure how representative that is.


```
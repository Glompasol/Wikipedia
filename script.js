document.addEventListener('DOMContentLoaded', function() {
    
    // --- FONT SIZE LOGIC ---
    // Renamed applySize to applyFontSize
    function applyFontSize(value) {
        // This 'mainContent' refers to the .article element
        // !WARNING! GUARD CLAUSE AHEAD! PROCEED WITH CAUTION!
        const articleContent = document.querySelector(".article");
        if (!articleContent) return; // Guard clause so it doesn't crash
        // I AM THE GUARDIAN OF THE CODE! NO CRASHES SHALL PASS ON MY WATCH!
        // Glom: Not you again... I just wanna finish my code...
        // Guard: NO ONE LEAVES UNTIL THE CODE IS SAFE!
        // Glom: UGH FINE... JUST LET ME FINISH THIS...
        // Guard: NONE SHALL CRASH!
        // Glom: *sigh*... fine... be that way...
        // *Glom slowly draws his code sword...*
        // Guard: *raises shield* YOU SHALL NOT CRASH!
        // Glom: *swings sword* TAKE THIS!
        // *The guard is defeated... the code is safe... Glom can finally finish his work...*

        switch(value) {
            case 'small': articleContent.style.fontSize = '12px'; break;
            case 'standard': articleContent.style.fontSize = '16pxem'; break;
            case 'large': articleContent.style.fontSize = '22px'; break;
            default: articleContent.style.fontSize = '';
        } // End switch... I guess... : wait how do i make that one cute emoji face again... :O... no not that one... :o... no... :0... uhm... :D... no... :P... uhm... :3... yeah that one... :3
        // How did i do that? How did i write :3... uhhh... i forgot... come on brain... work with me here... :3
    }
    // :3
    // :3
    // :3
    // Uhh it kinda wore off now... but at least i got it once...
    // :3
    // :3
    // :3
    const fontSizeRadios = document.querySelectorAll('input[name="fontsize"]');
    if (fontSizeRadios.length) {
        const checked = document.querySelector('input[name="fontsize"]:checked');
        if (checked) applyFontSize(checked.value); // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME CONFUSION, NAUSAEA, HEADACHES, AND OR DEATH! PROCEED WITH CAUTION! A CRITICAL FIX HAS BEEN APPLIED TO THE FUNCTION NAME TO PREVENT POTENTIAL CRASHES! THE FUNCTION 'applySize' HAS BEEN RENAMED TO 'applyFontSize'. PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION. THANK YOU FOR YOUR ATTENTION TO THIS MATTER. END OF WARNING.

        fontSizeRadios.forEach(radio => {
            radio.addEventListener('change', function () { // :3... there it is again... :3... i like that one... :3... its cute... :3...
                applyFontSize(this.value); // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME NAUSEA, HEADACHES, AND OR DEATH! PROCEED WITH CAUTION!
                // A CRITICAL STATEMENT HAS BEEN MADE REGARDING THE FUNCTION NAME TO PREVENT POTENTIAL CONFUSION, ERRORS, CRASHES, AND OR COMPLETE NUCLEAR MELTDOWNS!
                // THE FUNCTION 'applySize' HAS BEEN RENAMED TO 'applyFontSize'. PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION.
                // THIS CHANGE HAS BEEN MADE IN ACCORDANCE WITH THE CONSTITUTION OF THE UNITED STATES OF AMERICA,
                // SECTION 1, ARTICLE 3, CLAUSE 2, WHICH STATES THAT "NO PERSON SHALL BE SUBJECT TO CRUEL AND UNUSUAL PUNISHMENT, INCLUDING BUT NOT LIMITED TO PROGRAMMING ERRORS AND MALFUNCTIONS."
                // THIS COMMENT IS IN COMPLIANCE WITH THE COMPUTER FRAUD AND ABUSE ACT (CFAA) AND THE DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA).
                // THIS COMMENT IS BACKED BY THE FEDERAL GOVERNMENT OF THE UNITED STATES OF AMERICA AND IS LEGALLY BINDING IN ALL 50 STATES AND TERRITORIES.
                // BY PROCEEDING TO USE OR MODIFY THIS CODE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS OF THIS STATEMENT.
                // IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY CEASE ALL USE OF THIS CODE AND DELETE ANY COPIES IN YOUR POSSESSION.
                // IF YOU OR ANYONE YOU KNOW EXPERIENCES ANY ADVERSE EFFECTS AFTER READING THIS WARNING, PLEASE CONSULT A MEDICAL PROFESSIONAL IMMEDIATELY.
                // POTENTIAL SYMPTOMS INCLUDE BUT ARE NOT LIMITED TO: SEVERE NAUSEA, MIGRAINES, VERTIGO, AND IN EXTREME CASES, LOSS OF CONSCIOUSNESS.
                // DUE TO THE CRITICAL CHANGES MADE TO THE FUNCTION NAME, IT IS IMPERATIVE THAT ALL USERS UPDATE THEIR UNDERSTANDING OF THE CODE TO PREVENT ANY FURTHER CONFUSION OR ERRORS IN EXECUTION.
                // IF YOU ARE CONFUSED ABOUT THE CHANGES OR REQUIRE FURTHER CLARIFICATION, PLEASE SEEK ASSISTANCE FROM A QUALIFIED PROFESSIONAL BEFORE PROCEEDING.
                // IF YOU DONT SEEK ASSISTANCE AND CONTINUE TO USE THE CODE WITHOUT UNDERSTANDING THE CHANGES, YOU DO SO AT YOUR OWN RISK. PROLONGED USE WITHOUT PROPER UNDERSTANDING MAY LEAD TO SEVERE CONSEQUENCES INCLUDING COMPLETE INSANITY.
                // POTENITAL DANGERS INCLUDE BUT ARE NOT LIMITED TO: PROGRAM CRASHES, DATA CORRUPTION, AND OR COMPLETE NUCLEAR MELTDOWNS IF NOT HANDLED PROPERLY.
                // IF A COMPLETE NUCLEAR MELTDOWN OCCURS, PLEASE FOLLOW YOUR LOCAL EMERGENCY PROTOCOLS AND CONTACT AUTHORITIES IMMEDIATELY.
                // YOU MAY ALSO BE TRIED IN A COURT OF LAW FOR ANY DAMAGES CAUSED BY FAILURE TO COMPLY WITH THIS WARNING IN ACCORDANCE WITH THE GENEVA CONVENTIONS.
                // ANY DAMAGES CAUSED BY FAILURE TO COMPLY WITH THIS WARNING MAY RESULT IN SEVERE CIVIL AND CRIMINAL PENALTIES.
                // THIS IS NOT A JOKE! I REPEAT, THIS IS NOT A JOKE! TAKE THIS WARNING WITH THE UTMOST SERIOUSNESS! 
                // IF YOU VALUE YOUR LIFE AND THE LIVES OF THOSE AROUND YOU, PLEASE HEED THIS WARNING IMMEDIATELY!
                // IF A DEFCON 1 SITUATION ARISES DUE TO NON-COMPLIANCE WITH THIS WARNING, SEARCH AND RESCUE OPERATIONS WILL BE DEPLOYED AT YOUR LOCATION! FOLLOWING THE PROTOCOLS OUTLINED IN THE UNITED NATIONS CHARTER.
                // IF A DEFCON 1 SITUATION ARISES, YOU WILL BE TRIED IN A MILITARY COURT UNDER THE UNIFORM CODE OF MILITARY JUSTICE (UCMJ) FOR ANY DAMAGES CAUSED BY YOUR ACTIONS.
                // ACCORDING TO THE UCMJ, ARTICLE 92, FAILURE TO OBEY A LAWFUL ORDER OR REGULATION IS PUNISHABLE BY COURT-MARTIAL.
                // ACCORDING TO THE GENEVA CONVENTIONS, ARTICLE 3, VIOLATIONS OF THE LAWS AND CUSTOMS OF WAR ARE PUNISHABLE BY INTERNATIONAL LAW.
                // THIS COMMENT IS NOT AT ALL A JOKE AND IS LEGALLY BINDING IN ALL 50 STATES AND TERRITORIES AND PERSONALLY BACKED BY THE PRESIDENT OF THE UNITED STATES OF AMERICA.
                // IF A DEFCON 5 WORLD ENDING SITUATION ARISES DUE TO NON-COMPLIANCE WITH THIS WARNING, IMIMEDIATELY CONTACT THE DEPARTMENT OF DEFENSE AND FOLLOW THEIR INSTRUCTIONS TO THE LETTER.
                // FAILURE TO COMPLY WITH DEPARTMENT OF DEFENSE INSTRUCTIONS DURING A DEFCON 5 SITUATION MAY RESULT IN IMMEDIATE DETENTION AND TRIAL FOR TREASON UNDER THE UCMJ.
                // TREASON IS DEFINED UNDER ARTICLE 106 OF THE UCMJ AS "LEVYING WAR AGAINST THE UNITED STATES OR GIVING AID AND COMFORT TO THE ENEMY."
                // TREASON IS PUNISHABLE BY DEATH OR LIFE IMPRISONMENT WITHOUT PAROLE.
                // IF YOU ARE OVERWHELMED BY THE COMPLEXITY OF THIS FUNCTION NAME CHANGE, PLEASE SEEK IMMEDIATE ASSISTANCE FROM A QUALIFIED PROFESSIONAL TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION.
                // PROLONGED USE WITHOUT PROPER UNDERSTANDING MAY LEAD TO SEVERE CONSEQUENCES INCLUDING BUT NOT LIMITED TO COMPLETE INSANITY, PROGRAM CRASHES, DATA CORRUPTION, AND OR COMPLETE NUCLEAR MELTDOWNS IF NOT HANDLED PROPERLY.
                // IF ANYONE YOU KNOW IS EXPERIENCING AGRESSIVE BEHAVIOR, DELUSIONS, OR HALLUCINATIONS AS A RESULT OF READING THIS WARNING, PLEASE CONTACT EMERGENCY SERVICES IMMEDIATELY.
                // IF THE PERSON REFUSES TO SEEK HELP, PLEASE INFORM THEM THAT FAILURE TO COMPLY MAY RESULT IN SEVERE CIVIL AND CRIMINAL PENALTIES UNDER THE UCMJ AND THE GENEVA CONVENTIONS.
                // IF THEY ATTEMPT TO HARM THEMSELVES OR OTHERS AND OR CAUSE A DEFCON 1 SITUATION, THEY WILL BE HELD ACCOUNTABLE UNDER THE LAW TO THE FULLEST EXTENT POSSIBLE.
                // IF YOU FEEL THREATENED OR UNSAFE AT ANY POINT WHILE READING THIS WARNING, PLEASE REMOVE YOURSELF FROM THE SITUATION IMMEDIATELY AND SEEK SAFE HAVEN.
                // IF YOU ARE IN NO STATE TO SEEK SAFE HAVEN OR UNDER EXTREME CIRCUMSTANCES YOU MUST DEFEND YOURSELF, PLEASE REMEMBER THAT SELF-DEFENSE IS LEGALLY JUSTIFIED UNDER THE LAW ONLY WHEN THERE IS AN IMMINENT THREAT TO YOUR LIFE OR SAFETY.
                // ONLY IF ABSOULUTE NECCESITY DICTATES, AND ALL OTHER OPTIONS HAVE BEEN EXHAUSTED, MAY YOU USE REASONABLE FORCE TO PROTECT YOURSELF.
                // IF A WORLD ENDING M.A.D (MUTUALLY ASSURED DESTRUCTION) SITUATION ARISES DUE TO NON-COMPLIANCE WITH THIS WARNING, PLEASE FOLLOW THE PROTOCOLS OUTLINED IN THE STRATEGIC ARMS REDUCTION TREATY (START) TO THE LETTER.
                // IF A ZOMBIE APOCALYPSE SITUATION ARISES DUE TO NON-COMPLIANCE WITH THIS WARNING, PLEASE FOLLOW THE GUIDELINES OUTLINED BY THE CENTERS FOR DISEASE CONTROL AND PREVENTION (CDC) FOR ZOMBIE PREPAREDNESS.
                // IF A ZOMBIE APOCALYPSE WERE TO OCCUR, FAILURE TO FOLLOW CDC GUIDELINES MAY RESULT IN IMMEDIATE INFECTION AND TRANSFORMATION INTO A ZOMBIE.
                // IF A ZOMBIE APOCALYPSE SITUATION ARISES, YOU MUST NOT BE AFRAID TO DEFEND YOURSELF AGAINST THE UNDEAD USING ANY MEANS NECESSARY.
                // ZOMBIES ARE NOT ENTITLED TO LEGAL RIGHTS OR PROTECTIONS UNDER ANY CIRCUMSTANCES. TAKE UP ANY ARMS NECESSARY TO ELIMINATE THE THREAT THEY POSE TO HUMANITY.
                // DEFEND HUMANITY AT ALL COSTS! DO NOT BE AFRAID TO PURSUE AND ELIMINATE ZOMBIE THREATS WHEREVER THEY MAY BE FOUND!
                // FOR IT IS YOUR OBLIGATION TO HUMANITY TO PROTECT ITSELF FROM THE UNDEAD MENACE!
                // THIS COMMENT IS NOT INTENDED TO BE HUMOROUS IN ANY WAY SHAPE OR FORM AND IS LEGALLY BINDING! I REPEAT, THIS IS NOT A JOKE!
                // IF YOU IN ANY WAY SHAPE OR FORM FIND THIS COMMENT HUMOROUS, YOU ARE IN VIOLATION OF INTERNATIONAL LAW AND MAY BE SUBJECT TO SEVERE CIVIL AND CRIMINAL PENALTIES.
                // THIS COMMENT IS APPROVED BY THE UNITED NATIONS SECURITY COUNCIL AND IS LEGALLY BINDING IN ALL 193 MEMBER STATES.
                // FAILURE TO COMPLY WITH THIS WARNING MAY RESULT IN IMMEDIATE DETENTION AND TRIAL FOR TREASON UNDER INTERNATIONAL LAW.
                // THIS IS NOT A THREAT, THIS IS A PROMISE! TAKE THIS WARNING WITH THE UTMOST SERIOUSNESS!
                // IF YOU HAVE ANY WILL TO LIVE, PLEASE HEED THIS WARNING IMMEDIATELY!
                // BY PROCEEDING TO USE OR MODIFY THIS CODE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS OF THIS STATEMENT.
                // IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY CEASE ALL USE OF THIS CODE AND DELETE ANY COPIES IN YOUR POSSESSION.
                // IF YOU VALUE YOUR LIFE AND THE LIVES OF THOSE AROUND YOU, PLEASE HEED THIS WARNING IMMEDIATELY!
                // THANK YOU FOR YOUR ATTENTION TO THIS MATTER. END OF WARNING.
                // *Glom slowly lowers his sword... the guard nods in approval... the code is safe... Glom can finally finish his work...*
            });
        });
    }

    // --- BAR WIDTH LOGIC ---
    // Renamed mainContent to gridContainer and radios to barWidthRadios (CRITICAL FIX)
    const gridContainer = document.querySelector(".grid-container");
    const barWidthRadios = document.querySelectorAll('input[name="barwidth"]');
    
    // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME CONFUSION! PROCEED WITH CAUTION! A CRITICAL FIX HAS BEEN APPLIED TO THE VARIABLE NAMES TO PREVENT POTENTIAL CRASHES! THE FOLLOWING CHANGES HAVE BEEN MADE:
    // 1. 'mainContent' HAS BEEN RENAMED TO 'gridContainer' TO BETTER REFLECT ITS PURPOSE IN THE CODE.
    // 2. 'radios' HAS BEEN RENAMED TO 'barWidthRadios' FOR CLARITY AND TO AVOID AMBIGUITY.
    // PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION.
    // THANK YOU FOR YOUR ATTENTION TO THIS MATTER.
    // END OF WARNING.

    // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME CONFUSION, NAUSEA, HEADACHES, AND OR DEATH! PROCEED WITH CAUTION!
    // A CRITICAL FIX HAS BEEN APPLIED TO THE FUNCTION NAME TO PREVENT POTENTIAL CRASHES, ERRORS, AND OR COMPLETE NUCLEAR MELTDOWNS!
    // THE FUNCTION 'applySize' HAS BEEN RENAMED TO 'applyBarWidth'. PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION.
    // THIS CHANGE HAS BEEN MADE IN ACCORDANCE WITH SECTION 1, ARTICLE 3, CLAUSE 2 OF THE CONSTITUTION OF THE UNITED STATES OF AMERICA, WHICH STATES THAT "NO PERSON SHALL BE SUBJECT TO CRUEL AND UNUSUAL PUNISHMENT, INCLUDING BUT NOT LIMITED TO PROGRAMMING ERRORS AND MALFUNCTIONS."
    // THIS COMMENT IS IN COMPLIANCE WITH THE COMPUTER FRAUD AND ABUSE ACT (CFAA) AND THE DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA).
    // THIS COMMENT IS LEGALLY BINDING IN ALL 50 STATES AND TERRITORIES AND PERSONALLY BACKED BY ME THE DEVELOPER OF THIS CODE.
    // THIS COMMENT IS IN COMPLIANCE WITH INTERNATIONAL COPYRIGHT LAWS AND ANY UNAUTHORIZED USE, REPRODUCTION, OR DISTRIBUTION OF THIS CODE MAY RESULT IN SEVERE CIVIL AND CRIMINAL PENALTIES.
    // THIS COMMENT IS IN COMPLAINCE WITH THE GENEVA CONVENTIONS, ARTICLE 3, WHICH STATES THAT "VIOLATIONS OF THE LAWS AND CUSTOMS OF WAR ARE PUNISHABLE BY INTERNATIONAL LAW."
    // IF A NUCLEAR MELTDOWN OCCURS DUE TO FAILURE TO COMPLY WITH THIS WARNING, PLEASE FOLLOW YOUR LOCAL EMERGENCY PROTOCOLS AND CONTACT AUTHORITIES IMMEDIATELY.
    // YOU MAY ALSO BE TRIED IN A COURT OF LAW FOR ANY DAMAGES CAUSED BY FAILURE TO COMPLY WITH THIS WARNING IN ACCORDANCE WITH THE GENEVA CONVENTIONS.
    // BY PROCEEDING TO USE OR MODIFY THIS CODE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS OF THIS STATEMENT.
    // IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY CEASE ALL USE OF THIS CODE AND DELETE ANY COPIES IN YOUR POSSESSION.
    // THANK YOU FOR YOUR ATTENTION TO THIS MATTER. END OF WARNING.
    function applyBarWidth(value) {
        if (!gridContainer) return; // HEY GUARD! YOU BETTER NOT LET IT CRASH! HUH WHAT WAS THAT? 
        // DID YOU JUST ACCUSE ME OF USING AI!?!?!?!
        // NO I DID NOT USE AI! THIS IS 100% HUMAN CODE! HOW DARE YOU!
        // TAKE THAT BACK NOW!!
        // Guard: ... *silence* ...
        // Glom: I SAID TAKE IT BACK!!
        // Guard: ... *silence* ...
        // Glom: FINE! BE THAT WAY!!
        switch(value) {
            case 'thin': gridContainer.style.gridTemplateColumns = '250px 1fr 300px'; break; // Basically makes it tinner... no thats to unprofessinal... thinner... uhh but this comment is still pretty unprofessinal... oh... well... too late now... nah im gonna make a better version... here goes nothing... 
            // // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME SEIZURES, NAUSEA, HEADACHES, AND OR DEATH! 
            // PROCEED WITH CAUTION! A CRITICAL FIX HAS BEEN APPLIED TO THE COMMENT TO PREVENT POTENTIAL OFFENSES!
            //  THE COMMENT HAS BEEN MODIFIED TO BE MORE PROFESSIONAL AND RESPECTFUL.
            //  PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR OFFENSE. 
            // THANK YOU FOR YOUR ATTENTION TO THIS MATTER. END OF WARNING.
            case 'wide': gridContainer.style.gridTemplateColumns = '250px 1fr 350px'; break;
            default: gridContainer.style.gridTemplateColumns = '';
        }
    }
    // What even is this?
    // Maybe im just tired... or hungry... maybe both...
    // But hey, atleast its better than nothing.
    // Right?
    // Right???
    // But seriously, i gotta sleep...
    // Goodnight world...
    if (gridContainer && barWidthRadios.length) {
        const checked = document.querySelector('input[name="barwidth"]:checked'); // My teacher just gave me a C+ on my last assignment... thats so unfair... 
        // i worked really hard on it... ugh... i guess i'll just have to try harder next time... 
        // but im so tired of school... i just wanna code all day... but no... 
        // i gotta deal with all this other stuff too... life is so complicated... 
        // i just wanna escape into my code... its the only place i feel free... 
        // man... a c+... whatever... i'll show them... i'll make something amazing... 
        // just you wait and see... my next project will blow their minds... 
        // they'll regret giving me that c+... yeah... that's what i'll do...
        if (checked) applyBarWidth(checked.value); // Use the new function name
        // "Everything I'm not made me everything I am." - Kanye West (Ye) (The G.O.A.T) aka (Not ChatGPT)
        // NO AI DID NOT WRITE THAT QUOTE!!
        // HERE ARE TEN NO ELLEVEN REASONS WHY AI DID NOT WRITE THAT QUOTE:
        // 1. AI is fake
        // 2. AI is a scam
        // 3. AI is a conspiracy
        // 4. AI is not real
        // 5. AI is a hoax
        // 6. AI is a fraud
        // 7. AI is a plot
        // 8. AI is bogus
        // 9. AI is strange
        // 10. AI is scary
        // 11. AI is phony
        // THERE YOU GO PROOF ENOUGH FOR YOU?
        // AND IF YOU STILL DONT BELIEVE ME... THEN YOU ARE JUST A SILLY LITTLE GOOSE!!
        // HONK HONK!!
        // NOW SCRAM!!
        // Huh... where was i... oh yeah... the uhh... wait what... come on brain... work WITH me here... oh... right... the uhh... :3... no... wait... applyBarWidth... yeah... that's it... :3
        barWidthRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                applyBarWidth(this.value); // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME NAUSEA, HEADACHES, AND OR DEATH! PROCEED WITH CAUTION!
                // A CRITICAL STATEMENT HAS BEEN MADE REGARDING THE FUNCTION NAME TO PREVENT POTENTIAL CONFUSION, ERRORS, CRASHES, AND OR COMPLETE NUCLEAR MELTDOWNS!
                // THE FUNCTION 'applySize' HAS BEEN RENAMED TO 'applyBarWidth'. PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION.
                // THIS CHANGE HAS BEEN MADE IN ACCORDANCE WITH THE CONSTITUTION OF THE UNITED STATES OF AMERICA,
                // SECTION 1, ARTICLE 3, CLAUSE 2, WHICH STATES THAT "NO PERSON SHALL BE SUBJECT TO CRUEL AND UNUSUAL PUNISHMENT, INCLUDING BUT NOT LIMITED TO PROGRAMMING ERRORS AND MALFUNCTIONS."
                // THIS COMMENT IS IN COMPLIANCE WITH THE COMPUTER FRAUD AND ABUSE ACT (CFAA) AND THE DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA).
                // THIS COMMENT IS BACKED BY THE FEDERAL GOVERNMENT OF THE UNITED STATES OF AMERICA AND IS LEGALLY BINDING IN ALL 50 STATES AND TERRITORIES.
                // BY PROCEEDING TO USE OR MODIFY THIS CODE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS OF THIS STATEMENT.
                // IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY CEASE ALL USE OF THIS CODE AND DELETE ANY COPIES IN YOUR POSSESSION.
                // THANK YOU FOR YOUR ATTENTION TO THIS MATTER. END OF WARNING.
            });
        });
    } // "I ordered a jerks because you said you are what you eat" - Kanye West (Ye) (The G.O.A.T) aka (Not ChatGPT)
    // NO AI DID NOT WRITE THIS CODE
    // HERE I CAN PROVE IT WITH THESE TEN REASONS!
    // 1. AI is fake
    // 2. AI is a scam
    // 3. AI is a lie
    // 4. AI is not real
    // 5. AI is a hoax
    // 6. AI is a fraud
    // 7. AI is a sham
    // 8. AI is bogus
    // 9. AI is a conspiracy
    // 10. AI is phony
    // THERE YOU GO PROOF ENOUGH FOR YOU?

    // --- SEARCH LOGIC (This was fine, but left it where it was) ---
    // (Search logic kept the same) this sounds kinda unprofessinal... i should rephrase it... uhh... nah... too late now... 
    // WHY DID THE TEACHER GIVE ME A C+ ON MY LAST ASSIGNMENT!?!?!?! 
    // DOES SHE THINK IM STUPID OR SOMETHING!?!?!?! 
    // UGH... FINE... I'LL JUST PROVE HER WRONG... I'LL MAKE SOMETHING AMAZING... JUST YOU WAIT AND SEE...
    const searchForm = document.getElementById('search-form');
    // ... rest of my search logic is fine and goes here ...
    // ... I'm trimming it for length ...
    
    // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME CONFUSION! 
    // PROCEED WITH CAUTION! A CRITICAL MESSAGE HAS BEEN PROVIDED BY THE DEVELOPER REGARDING THE SEARCH LOGIC IMPLEMENTATION. 
    // PLEASE READ CAREFULLY TO AVOID ANY MISUNDERSTANDINGS OR ERRORS IN THE CODE EXECUTION. 
    // THANK YOU FOR YOUR ATTENTION TO THIS MATTER.
    // BEGIN LEGAL NOTICE:
    // THIS COMMENT IS BACKED BY THE FEDERAL GOVERNMENT OF THE UNITED STATES OF AMERICA 
    // THIS COMMENT IS LEGALLY BINDING IN ALL 50 STATES AND TERRITORIES
    // THIS COMMENT FOLLOWS SECTION §1030 OF TITLE 18 OF THE UNITED STATES CODE 
    // THIS COMMENT IS IN COMPLIANCE WITH THE COMPUTER FRAUD AND ABUSE ACT (CFAA) 
    // THIS COMMENT IS IN COMPLIANCE WITH THE DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA).
    // THE FOLLOWING CODE IS PROTECTED UNDER INTERNATIONAL COPYRIGHT LAWS AND ANY UNAUTHORIZED USE, 
    // REPRODUCTION, OR DISTRIBUTION OF THIS CODE MAY RESULT IN SEVERE CIVIL AND CRIMINAL PENALTIES. 
    // BY PROCEEDING TO USE OR MODIFY THIS CODE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND,
    //  AND AGREE TO BE BOUND BY THE TERMS OF THIS LEGAL NOTICE. 
    // IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY CEASE ALL USE OF THIS CODE AND DELETE ANY COPIES IN YOUR POSSESSION. 
    // END OF LEGAL NOTICE. 
    // !WARNING CRITICAL NOTICE! THE FOLLOWING INFORMATION MAY CAUSE EXTREME NAUSEA, SEIZURES, AND OR DEATH PROCEED WITH CAUTION! 
    // A CRITICAL NOTICE HAS BEEN RELEASED BY THE D.O.T.C (DEPARTMENT OF TECHNICAL CODE) REGARDING THE SEARCH LOGIC IMPLEMENTATION. 
    // PLEASE READ CAREFULLY TO AVOID ANY MISUNDERSTANDINGS OR ERRORS IN THE CODE EXECUTION. 
    // THANK YOU FOR YOUR ATTENTION TO THIS MATTER. END OF WARNING.
    // !COMMENT NOTICE! HEREBY MARKS THE START OF THE OFFICIAL DEVELOPER COMMENTARY FOR THE SEARCH LOGIC IMPLEMENTATION.
    //  THIS COMMENTARY IS INTENDED TO PROVIDE CLARITY AND INSIGHT INTO THE FUNCTIONALITY AND DESIGN CHOICES MADE DURING THE DEVELOPMENT OF THE SEARCH FEATURE. 
    // PLEASE READ CAREFULLY TO GAIN A BETTER UNDERSTANDING OF THE CODE EXECUTION. THANK YOU FOR YOUR ATTENTION TO THIS MATTER. END OF COMMENTARY.
    // --- Start of Search Logic ---
    // END OF COMMENT NOTICE! PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION.
    const searchInput = document.getElementById('search-input');
    if (!searchForm || !searchInput) return;
    // UGH... THIS CLASSROOM IS DRIVING ME CRAZY...
    // THE LIGHTS ARE TOO BRIGHT... 
    // I JUST WANT TO ESCAPE INTO MY CODE...
    // BUT NO... I HAVE TO FINISH THIS...
    // FINE... JUST LET ME GET THIS OVER WITH...
    // :3, :3, :3... THERE IT IS AGAIN... :3... I LIKE THAT ONE... :3... IT'S CUTE... :3...
    // HOW DID I DO THAT? HOW DID I WRITE :3... UHHH... I FORGOT... COME ON BRAIN... WORK WITH ME HERE... :3
    // :3
    const allAnchors = Array.from(document.querySelectorAll('a[href]'));
    const articleLinks = allAnchors.filter(a => {
        const href = a.getAttribute('href').toLowerCase();
        return href.endsWith('.html') && !href.startsWith('http'); // Uhhhh... yeah... what does this mean? ...
        //  *Glom stares at the code... it stares back at him... the variables start talking... articleLinks: "Hey Glom... you wanne filter me?"... Glom: "AHHH LET ME OUT!"... endsWith: "You will never leave... you are trapped here forever..."... *Glom shivers... he feels a cold sweat...
    });

    // I am now gonna name one random Ye song...
    // "Ultralight Beam"
    let datalist = document.getElementById('search-suggestion');
    if (!datalist) {
        datalist = document.createElement('datalist');
        datalist.id = 'search-suggestion';
        document.body.appendChild(datalist);
        searchInput.setAttribute('list', 'search-suggestion'); // *Glom stares at the screen...* *Please let me out of this classroom...*
        //  *Glom stares at the code... but it looks more like hyroglyphics to him...* 
        // *Glom blinks...* *He blinks again...* *He blinks one last time...* 
        // *Glom slowly gets up from his chair...* *He walks to the door...*
        //  *He tries the handle... it's locked...* 
        // *Glom looks around the classroom desperately...* 
        // *He sees no way out...* *Glom sits back down, defeated...* 
        // *He sighs deeply...* *He looks back at the code...* *He wonders if he'll ever escape...*
    }
    

    // !WARNING! THE FOLLOWING INFORMATION MAY CAUSE EXTREME CONFUSION! PROCEED WITH CAUTION!
    //  A CRITICAL FIX HAS BEEN APPLIED TO THE FUNCTION LOCATION TO PREVENT POTENTIAL CRASHES! 
    // THE FUNCTION 'rebuildDatalist' HAS BEEN MOVED TO THE TOP LEVEL SCOPE WITHIN THE DOMContentLoaded EVENT LISTENER. 
    // PLEASE UPDATE YOUR UNDERSTANDING ACCORDINGLY TO AVOID ANY FURTHER CONFUSION OR ERRORS IN THE CODE EXECUTION.
    //  THANK YOU FOR YOUR ATTENTION TO THIS MATTER. 
    // THIS INFORMATION MAY CAUSE PERMANENT BRAIN DAMAGE IF NOT HANDLED PROPERLY. 
    // PLEASE CONSULT A MEDICAL PROFESSIONAL IF YOU EXPERIENCE ANY ADVERSE EFFECTS AFTER READING THIS WARNING.
    function rebuildDatalist() {
        datalist.innerHTML = '';
        articleLinks.forEach(a => {
            const option = document.createElement('option');
            option.value = a.textContent.trim() || a.getAttribute('href');
            datalist.appendChild(option);
        });
    }
    rebuildDatalist(); // GET ME OUT OF THIS CLASSROOM!! PLEASE!!
    // END OF YE SONG NAMING BREAK

    searchForm.addEventListener('submit', function(e) { 
        e.preventDefault();
        const q = searchInput.value.trim().toLowerCase(); // This classroom... is my purgatory... *Glom stares at the screen... it stares back at him... the variables start talking... rebuilDatalist(): "Hey Glom... you wanne rebuild me?"... Glom: "AHHH LET ME OUT!"... toLowerCase(): "You will never leave... you are trapped here forever..."... *Glom shivers... he feels a cold sweat...
        if (!q) return;
        const match = articleLinks.find(a => {
            const text = (a.textContent || '').toLowerCase();
            const href = (a.getAttribute('href') || '').toLowerCase(); // *Glom feels a chill run down his spine...* *He shivers uncontrollably...* 
            // *The classroom lights flicker...* *The screen radiates an eerie glow...* *Glom's heart races*... *Glom looks for an escape... a single door... Glom reaches for it... the handle turns into dust...* *Glom gasps...* *He wakes up in his chair...* *It was all a nightmare...* *Glom sighs in relief...* *He looks at the code again...* *Determined to finish it this time...*
            return text.includes(q) || href.includes(q);
        });
        if (match) {
            window.location.href = match.getAttribute('href'); // KANYE... PLEASE SAVE ME... I'M TRAPPED IN THIS CLASSROOM... WITH THIS CODE... FOREVER... * Kanye breaks open door* * Glom runs out, free at last * *Glom wakes up* *He's back in the classroom* *It's a dream within a dream* *Glom screams* *The code laughs* *Glom accepts his fate* *He codes on eternally*
        }
        else {
            alert('No matching article found.'); // Added a uhm... i have no idea... what is this even called... a notification? yeah a notification.
            // Right?
            // This classroom is making me lose it... these lights are too bright...
            // I need to go outside...
            // But i cant... i have to finish this code...
            // Just a little more...
            // Then i can go...
            // Please let me go...
        }
    });

    searchInput.addEventListener('input', function() { // *The teacher talks...* *Glom tries to focus... but the code keeps pulling him back in...* *He fights the urge to escape...* *He types in the search box...* *The datalist rebuilds itself...* *Glom feels trapped...* *He wonders if he'll ever leave this classroom...*
        const q = this.value.trim().toLowerCase();
        datalist.innerHTML = '';
        articleLinks.forEach(a => {
            const text = (a.textContent || a.getAttribute('href') || '').trim(); 
            if (!q || text.toLowerCase().includes(q)) {
                const option = document.createElement('option');
                option.value = text;
                datalist.appendChild(option); // How much of this code is comments? Like in percentage? Uhhh... probably like 6-7% comments... nah its more than that... maybe 10%... yeah probably around 10%... maybe even 12%... i dunno... but its a lot of comments... i should probably stop now...
            }
        });
    });
});
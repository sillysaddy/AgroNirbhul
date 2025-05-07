export interface RemedyContent {
      diseaseName: string;
      description: string;
      whyItHappens: string;
      dos: string[];
      donts: string[];
      whatToDoNow: string;
      culturalPractice: string;
      chemicalControl: string;
      importantNote: string;
    }
    
    export interface Remedy {
      en: RemedyContent;
      bn: RemedyContent;
    }
    
    export interface RemediesCollection {
      [diseaseKey: string]: Remedy;
    }
    
    // Store remedies here. Add more as you get them.
    export const remediesData: RemediesCollection = {
      'Apple___Apple_scab': {
        en: {
          diseaseName: 'Apple - Apple Scab',
          description: 'Appears as olive-green to brown spots on leaves, often darkening and becoming velvety. Leaves may become distorted and fall prematurely. On fruit, it causes dark, scabby blotches that can lead to cracking and distortion.',
          whyItHappens: 'Caused by the fungus Venturia inaequalis, which overwinters on fallen leaves and infected twigs. Spores are spread by wind and rain, particularly in wet and humid conditions.',
          dos: [
            'Rake and destroy fallen leaves.',
            'Prune out infected twigs.',
            'Ensure good air circulation.',
            'Consider planting resistant varieties if available.'
          ],
          donts: [
            'Do not leave infected debris in the orchard.',
            'Avoid practices that keep foliage wet for extended periods.'
          ],
          whatToDoNow: 'Remove and destroy infected plant parts. Improve sanitation in the orchard. Consider applying fungicides if the infection is severe and weather conditions favor the disease.',
          culturalPractice: 'Sanitation (removing infected leaves and twigs).',
          chemicalControl: 'Fungicides containing active ingredients like Captan or Myclobutanil are often used. Apply according to product label and local guidelines, often starting in spring.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'আপেল - অ্যাপেল স্ক্যাব',
          description: 'আপেল স্ক্যাব পাতার উপর জলপাই-সবুজ থেকে বাদামী দাগ হিসাবে দেখা যায়, যা প্রায়শই গাঢ় হয়ে মখমলের মতো হয়। পাতা বিকৃত হতে পারে এবং অকালে ঝরে পড়তে পারে। ফলের উপর, এটি গাঢ়, খসখসে দাগ সৃষ্টি করে যা ফাটল এবং বিকৃতি ঘটাতে পারে।',
          whyItHappens: 'এটি Venturia inaequalis নামক ছত্রাকের কারণে হয়, যা ঝরে পড়া পাতা এবং আক্রান্ত ডালে শীতকালে বেঁচে থাকে। বিশেষ করে ভেজা এবং আর্দ্র অবস্থায় বাতাস ও বৃষ্টির মাধ্যমে এর রেণু ছড়ায়।',
          dos: [
            'ঝরে পড়া পাতা সংগ্রহ করে নষ্ট করে দিন।',
            'আক্রান্ত ডালপালা ছেঁটে ফেলুন।',
            'পর্যাপ্ত বায়ু চলাচল নিশ্চিত করুন।',
            'সম্ভব হলে রোগ প্রতিরোধী জাত লাগানোর কথা বিবেচনা করুন।'
          ],
          donts: [
            'বাগানে আক্রান্ত আবর্জনা ফেলে রাখবেন না।',
            'এমন অভ্যাস পরিহার করুন যা পাতার আর্দ্রতা দীর্ঘ সময় ধরে রাখে।'
          ],
          whatToDoNow: 'আক্রান্ত গাছের অংশগুলি সরিয়ে ফেলুন এবং নষ্ট করে দিন। বাগানে পরিচ্ছন্নতা উন্নত করুন। যদি সংক্রমণ গুরুতর হয় এবং আবহাওয়া রোগের অনুকূল থাকে তবে ছত্রাকনাশক স্প্রে করার কথা বিবেচনা করুন।',
          culturalPractice: 'পরিচ্ছন্নতা (আক্রান্ত পাতা এবং ডালপালা অপসারণ)।',
          chemicalControl: 'ক্যাপ্টান বা মাইক্লোবুটানিলের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশকগুলি প্রায়শই ব্যবহৃত হয়। পণ্যের লেবেল এবং স্থানীয় নির্দেশিকা অনুযায়ী, সাধারণত বসন্তকালে, স্প্রে করুন।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Apple___Black_rot': {
        en: {
          diseaseName: 'Apple - Black Rot',
          description: 'On fruit, it begins as small reddish flecks that enlarge into dark, sunken lesions, often with concentric rings. Infected fruit shrivels into "mummies." On leaves, it causes "Frog-eye" leaf spot (small spots with a purple border and tan center). Cankers can also form on branches.',
          whyItHappens: 'Caused by the fungus Diplodia seriata. It overwinters in mummified fruit, cankers, and dead wood. Spores are spread by wind and rain. Infection often occurs through wounds.',
          dos: [
            'Prune out dead or cankered branches.',
            'Remove mummified fruit from trees and the ground.',
            'Improve tree vigor through proper care.'
          ],
          donts: [
            'Do not leave infected wood or fruit in the orchard.',
            'Avoid wounding trees unnecessarily.'
          ],
          whatToDoNow: 'Sanitize the orchard by removing infected material. Consider protective fungicide sprays, especially after pruning or wounding.',
          culturalPractice: 'Sanitation (removing mummies and cankers). Proper pruning.',
          chemicalControl: 'Fungicides like Captan are often used for protection.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'আপেল - ব্ল্যাক রট',
          description: 'ফলের উপর, এটি ছোট লালচে দাগ হিসাবে শুরু হয় যা বড় হয়ে গাঢ়, দেবে যাওয়া দাগে পরিণত হয়, প্রায়শই বৃত্তাকার রিং সহ। আক্রান্ত ফল শুকিয়ে "মামি"-তে পরিণত হয়। পাতার উপর, এটি "ফ্রগ-আই" পাতা দাগ সৃষ্টি করে (বেগুনি কিনারা এবং তামাটে কেন্দ্র সহ ছোট দাগ)। ডালপালাগুলিতেও ক্যানকার তৈরি হতে পারে।',
          whyItHappens: 'এটি Diplodia seriata নামক ছত্রাকের কারণে হয়। এটি মমিকৃত ফল, ক্যানকার এবং মরা কাঠের মধ্যে শীতকালে বেঁচে থাকে। বাতাস এবং বৃষ্টির মাধ্যমে এর রেণু ছড়ায়। ক্ষতের মাধ্যমে প্রায়শই সংক্রমণ হয়।',
          dos: [
            'মরা বা ক্যানকারযুক্ত ডালপালা ছেঁটে ফেলুন।',
            'গাছ এবং মাটি থেকে মমিকৃত ফল সরান।',
            'সঠিক যত্নের মাধ্যমে গাছের শক্তি বাড়ান।'
          ],
          donts: [
            'বাগানে আক্রান্ত কাঠ বা ফল ফেলে রাখবেন না।',
            'অকারণে গাছের ক্ষতি করা থেকে বিরত থাকুন।'
          ],
          whatToDoNow: 'আক্রান্ত উপাদান সরিয়ে বাগান পরিচ্ছন্ন করুন। বিশেষ করে ছাঁটাই বা আঘাতের পরে প্রতিরোধমূলক ছত্রাকনাশক স্প্রে করার কথা বিবেচনা করুন।',
          culturalPractice: 'পরিচ্ছন্নতা (মামি এবং ক্যানকার অপসারণ)। সঠিক ছাঁটাই।',
          chemicalControl: 'সুরক্ষার জন্য ক্যাপ্টানের মতো ছত্রাকনাশক প্রায়শই ব্যবহৃত হয়।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Apple___Cedar_apple_rust': {
        en: {
          diseaseName: 'Apple - Cedar Apple Rust',
          description: 'Causes bright yellow-orange spots on the upper surface of apple leaves. On the underside, small bumps or tubes develop. Severely infected leaves may drop prematurely. On fruit, it causes distorted and unmarketable spots. This disease requires both apple and juniper trees to complete its life cycle.',
          whyItHappens: 'Caused by the fungus Gymnosporangium juniperi-virginianae. It alternates between juniper trees (where it forms galls) and apple trees. Spores from junipers infect apples in spring.',
          dos: [
            'If possible, avoid planting susceptible apple and juniper varieties near each other (within a mile).',
            'Plant resistant varieties of both.',
            'Prune out galls on juniper trees during late winter.'
          ],
          donts: [
            'Do not plant susceptible hosts close together.'
          ],
          whatToDoNow: 'Remove visible galls from nearby juniper trees. Remove and destroy infected apple leaves and fruit. Apply protective fungicides to apple trees during the period when spores are releasing from junipers.',
          culturalPractice: 'Plant resistant varieties. Separate apple and juniper hosts. Remove galls from junipers.',
          chemicalControl: 'Fungicides containing active ingredients like Myclobutanil or Mancozeb can be effective when applied preventatively.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'আপেল - সিডার আপেল মরিচা',
          description: 'আপেল পাতার উপরের পৃষ্ঠে উজ্জ্বল হলুদ-কমলা দাগ সৃষ্টি করে। নিচের পৃষ্ঠে ছোট ছোট ফোলা বা টিউব তৈরি হয়। গুরুতরভাবে আক্রান্ত পাতা অকালে ঝরে পড়তে পারে। ফলের উপর, এটি বিকৃত এবং অবিক্রয়যোগ্য দাগ সৃষ্টি করে। এই রোগের জীবনচক্র সম্পূর্ণ করার জন্য আপেল এবং জুনিপার গাছ উভয়ই প্রয়োজন।',
          whyItHappens: 'এটি Gymnosporangium juniperi-virginianae নামক ছত্রাকের কারণে হয়। এটি জুনিপার গাছ (যেখানে এটি গল তৈরি করে) এবং আপেল গাছের মধ্যে পর্যায়ক্রমে থাকে। বসন্তকালে জুনিপার থেকে আসা রেণু আপেল গাছকে সংক্রমিত করে।',
          dos: [
            'সম্ভব হলে সংবেদনশীল আপেল এবং জুনিপার জাত কাছাকাছি (এক মাইলের মধ্যে) রোপণ করা থেকে বিরত থাকুন।',
            'উভয় গাছের রোগ প্রতিরোধী জাত লাগান।',
            'শীতের শেষের দিকে জুনিপার গাছে তৈরি হওয়া গল ছেঁটে ফেলুন।'
          ],
          donts: [
            'সংবেদনশীল হোস্টগুলিকে কাছাকাছি লাগাবেন না।'
          ],
          whatToDoNow: 'দৃশ্যমান গলগুলি কাছাকাছি জুনিপার গাছ থেকে সরিয়ে ফেলুন। আক্রান্ত আপেল পাতা এবং ফল সরিয়ে নষ্ট করে দিন। জুনিপার থেকে রেণু ছড়ানোর সময় আপেল গাছে প্রতিরোধমূলক ছত্রাকনাশক স্প্রে করুন।',
          culturalPractice: 'রোগ প্রতিরোধী জাত লাগান। আপেল এবং জুনিপার হোস্ট আলাদা রাখুন। জুনিপার থেকে গল অপসারণ করুন।',
          chemicalControl: 'মাইক্লোবুটানিল বা ম্যানকোজেবের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক প্রতিরোধমূলকভাবে প্রয়োগ করলে কার্যকর হতে পারে।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Cherry_(including_sour)___Powdery_mildew': {
        en: {
          diseaseName: 'Cherry - Powdery Mildew',
          description: 'Appears as white, powdery patches on the surface of leaves, shoots, and sometimes fruit. Infected leaves may curl or distort. Severe infections can stunt growth.',
          whyItHappens: 'Caused by various fungi (e.g., Podosphaera clandestina). It thrives in warm, dry conditions with high humidity, but does not require leaf wetness for infection. Spores are spread by wind.',
          dos: [
            'Ensure good air circulation through proper pruning.',
            'Plant in areas with good sunlight.',
            'Remove infected plant parts early.'
          ],
          donts: [
            'Avoid overcrowding plants.'
          ],
          whatToDoNow: 'Prune out affected shoots and leaves. Apply fungicides if the disease is spreading rapidly.',
          culturalPractice: 'Pruning for air circulation, planting in sunny locations, removing infected parts.',
          chemicalControl: 'Fungicides containing active ingredients like Myclobutanil, Azoxystrobin, or Sulfur can be used. Biological fungicides (e.g., based on Bacillus subtilis) are also an option.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'চেরি - পাউডারি মিলডিউ',
          description: 'পাতা, কাণ্ড এবং কখনও কখনও ফলের পৃষ্ঠে সাদা, পাউডারের মতো দাগ হিসাবে দেখা যায়। আক্রান্ত পাতা কুঁকড়ে যেতে বা বিকৃত হতে পারে। গুরুতর সংক্রমণ গাছের বৃদ্ধি ব্যাহত করতে পারে।',
          whyItHappens: 'বিভিন্ন ছত্রাকের কারণে হয় (যেমন Podosphaera clandestina)। এটি উচ্চ আর্দ্রতা সহ উষ্ণ, শুষ্ক পরিস্থিতিতে বৃদ্ধি পায়, তবে সংক্রমণের জন্য পাতার আর্দ্রতার প্রয়োজন হয় না। বাতাস দ্বারা এর রেণু ছড়ায়।',
          dos: [
            'সঠিক ছাঁটাইয়ের মাধ্যমে পর্যাপ্ত বায়ু চলাচল নিশ্চিত করুন।',
            'পর্যাপ্ত সূর্যালোক আছে এমন জায়গায় গাছ লাগান।',
            'আক্রান্ত গাছের অংশগুলি দ্রুত সরিয়ে ফেলুন।'
          ],
          donts: [
            'গাছপালা খুব ঘন করে লাগাবেন না।'
          ],
          whatToDoNow: 'আক্রান্ত কাণ্ড এবং পাতা ছেঁটে ফেলুন। যদি রোগ দ্রুত ছড়ায় তবে ছত্রাকনাশক স্প্রে করুন।',
          culturalPractice: 'বায়ু চলাচলের জন্য ছাঁটাই, রৌদ্রোজ্জ্বল স্থানে রোপণ, আক্রান্ত অংশ অপসারণ।',
          chemicalControl: 'মাইক্লোবুটানিল, অ্যাজোক্সিস্ট্রোবিন বা সালফারের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক ব্যবহার করা যেতে পারে। জৈবিক ছত্রাকনাশকও (যেমন Bacillus subtilis ভিত্তিক) একটি বিকল্প।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot': {
        en: {
          diseaseName: 'Corn (Maize) - Cercospora Leaf Spot / Gray Leaf Spot',
          description: 'Causes long, rectangular, gray-to-brown lesions on leaves that are limited by the leaf veins. Lesions may have a yellow halo. Under humid conditions, gray fuzzy growth (spores) may be visible. Severe infection can cause significant leaf area reduction.',
          whyItHappens: 'Caused by the fungi Cercospora zeae-maydis and Cercospora zeina. The fungi survive in corn residue. Spores are spread by wind and rain. Favored by warm, humid conditions and extended periods of leaf wetness.',
          dos: [
            'Rotate crops with non-host plants.',
            'Manage corn residue by plowing or tillage where appropriate to reduce inoculum.',
            'Consider resistant or tolerant hybrids.'
          ],
          donts: [
            'Avoid continuous corn planting, especially with minimum tillage, if the disease has been present.'
          ],
          whatToDoNow: 'Monitor disease progression. If conditions favor the disease and the hybrid is susceptible, consider fungicide application.',
          culturalPractice: 'Crop rotation, residue management, resistant hybrids.',
          chemicalControl: 'Fungicides from the strobilurin, triazole, or mixed groups can be effective.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'ভুট্টা - সার্কোস্পোরা লিফ স্পট / গ্রে লিফ স্পট',
          description: 'পাতার উপর লম্বা, আয়তাকার, ধূসর-বাদামী দাগ সৃষ্টি করে যা পাতার শিরা দ্বারা সীমাবদ্ধ থাকে। দাগগুলির চারপাশে হলুদ বলয় থাকতে পারে। আর্দ্র পরিস্থিতিতে ধূসর তুলতুলে বৃদ্ধি (রেণু) দৃশ্যমান হতে পারে। গুরুতর সংক্রমণ পাতার ক্ষেত্রফল উল্লেখযোগ্যভাবে কমিয়ে দিতে পারে।',
          whyItHappens: 'এটি Cercospora zeae-maydis এবং Cercospora zeina নামক ছত্রাকের কারণে হয়। ছত্রাকগুলি ভুট্টার ফসলের অবশিষ্টাংশে বেঁচে থাকে। বাতাস এবং বৃষ্টির মাধ্যমে এর রেণু ছড়ায়। উষ্ণ, আর্দ্র পরিস্থিতি এবং পাতার দীর্ঘ সময় ধরে ভেজা থাকা এই রোগের জন্য অনুকূল।',
          dos: [
            'অ-হোস্ট ফসলের সাথে শস্য পর্যায় (ক্রপ রোটেশন) করুন।',
            'রোগের জীবাণু কমাতে ফসলের অবশিষ্টাংশ লাঙ্গল দিয়ে মাটির নিচে চাপা দিন।',
            'রোগ প্রতিরোধী বা সহনশীল ভুট্টা হাইব্রিড লাগানোর কথা বিবেচনা করুন।'
          ],
          donts: [
            'যদি রোগটি উপস্থিত থাকে, তবে বিশেষ করে মিনিমাম টিলেজ সহ একটানা ভুট্টা চাষ এড়িয়ে চলুন।'
          ],
          whatToDoNow: 'রোগের অগ্রগতি পর্যবেক্ষণ করুন। যদি পরিস্থিতি রোগের অনুকূল হয় এবং হাইব্রিড সংবেদনশীল হয়, তবে ছত্রাকনাশক স্প্রে করার কথা বিবেচনা করুন।',
          culturalPractice: 'শস্য পর্যায়, ফসলের অবশিষ্টাংশ ব্যবস্থাপনা, রোগ প্রতিরোধী হাইব্রিড।',
          chemicalControl: 'স্ট্রোবিলুরিন, ট্রায়াজোল বা মিশ্র গ্রুপের ছত্রাকনাশক কার্যকর হতে পারে।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Corn_(maize)___Common_rust_': {
        en: {
          diseaseName: 'Corn (Maize) - Common Rust',
          description: 'Causes small, cinnamon-brown, powdery pustules on both surfaces of leaves, often scattered or in bands. Pustules may darken with age. Severe infection can lead to yellowing and premature death of leaves.',
          whyItHappens: 'Caused by the fungus Puccinia sorghi. Spores are spread by wind. It can overwinter in warmer regions and may utilize an alternate host (Oxalis species) in some areas, though direct spread between corn plants is common. Favored by moderate temperatures and high humidity.',
          dos: [
            'Plant resistant or tolerant hybrids.',
            'Remove alternate hosts (Oxalis) from around fields if they are a factor.'
          ],
          donts: [
            'Avoid planting susceptible varieties in areas with a history of rust.'
          ],
          whatToDoNow: 'Monitor disease development. If the disease is severe, especially before tasseling, fungicide application may be warranted.',
          culturalPractice: 'Resistant hybrids, alternate host removal (if applicable).',
          chemicalControl: 'Fungicides from the triazole or strobilurin groups are commonly used.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'ভুট্টা - সাধারণ মরিচা',
          description: 'পাতার উভয় পৃষ্ঠে ছোট, দারুচিনি-বাদামী, পাউডারের মতো ফুসকুড়ি সৃষ্টি করে, প্রায়শই বিক্ষিপ্ত বা ব্যান্ডে দেখা যায়। বয়সের সাথে সাথে ফুসকুড়ি গাঢ় হতে পারে। গুরুতর সংক্রমণে পাতা হলুদ হয়ে যেতে পারে এবং অকালে মরে যেতে পারে।',
          whyItHappens: 'এটি Puccinia sorghi নামক ছত্রাকের কারণে হয়। বাতাস দ্বারা এর রেণু ছড়ায়। এটি উষ্ণ অঞ্চলে শীতকালে বেঁচে থাকতে পারে এবং কিছু এলাকায় একটি বিকল্প হোস্ট (Oxalis প্রজাতি) ব্যবহার করতে পারে, যদিও ভুট্টা গাছের মধ্যে সরাসরি ছড়ানো সাধারণ। মাঝারি তাপমাত্রা এবং উচ্চ আর্দ্রতা এই রোগের জন্য অনুকূল।',
          dos: [
            'রোগ প্রতিরোধী বা সহনশীল হাইব্রিড লাগান।',
            'যদি বিকল্প হোস্ট (Oxalis) একটি কারণ হয় তবে মাঠের চারপাশ থেকে তা সরিয়ে ফেলুন।'
          ],
          donts: [
            'মরিচার ইতিহাস আছে এমন এলাকায় সংবেদনশীল জাত লাগানো থেকে বিরত থাকুন।'
          ],
          whatToDoNow: 'রোগের বিকাশ পর্যবেক্ষণ করুন। যদি রোগ গুরুতর হয়, বিশেষ করে ট্যাসেলিং এর আগে, তবে ছত্রাকনাশক স্প্রে করার প্রয়োজন হতে পারে।',
          culturalPractice: 'রোগ প্রতিরোধী হাইব্রিড, বিকল্প হোস্ট অপসারণ (যদি প্রযোজ্য হয়)।',
          chemicalControl: 'ট্রায়াজোল বা স্ট্রোবিলুরিন গ্রুপের ছত্রাকনাশক সাধারণত ব্যবহৃত হয়।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Corn_(maize)___Northern_Leaf_Blight': {
        en: {
          diseaseName: 'Corn (Maize) - Northern Leaf Blight',
          description: 'Causes long, elliptical, gray-green to pale tan lesions on leaves, often described as "cigar-shaped." Lesions can be several inches long and expand rapidly under favorable conditions, leading to significant leaf death.',
          whyItHappens: 'Caused by the fungus Setosphaeria turcica. It overwinters in corn residue. Spores are spread by wind and splashing water. Favored by extended periods of leaf wetness and moderate temperatures.',
          dos: [
            'Rotate crops with non-host plants.',
            'Manage corn residue.',
            'Plant resistant hybrids (those with Ht genes offer specific resistance).'
          ],
          donts: [
            'Avoid continuous corn with minimum tillage in affected fields.'
          ],
          whatToDoNow: 'Monitor disease development, especially on lower leaves. If the disease is active before tasseling on susceptible hybrids, fungicide application may be beneficial.',
          culturalPractice: 'Crop rotation, residue management, resistant hybrids.',
          chemicalControl: 'Fungicides containing active ingredients from the strobilurin or triazole groups are effective.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'ভুট্টা - নর্দার্ন লিফ ব্লাইট',
          description: 'পাতার উপর লম্বা, উপবৃত্তাকার, ধূসর-সবুজ থেকে হালকা তামাটে দাগ সৃষ্টি করে, যা প্রায়শই "সিগার-আকৃতির" হিসাবে বর্ণনা করা হয়। দাগগুলি কয়েক ইঞ্চি লম্বা হতে পারে এবং অনুকূল পরিস্থিতিতে দ্রুত প্রসারিত হয়ে পাতা শুকিয়ে মারতে পারে।',
          whyItHappens: 'এটি Setosphaeria turcica নামক ছত্রাকের কারণে হয়। এটি ভুট্টার ফসলের অবশিষ্টাংশে শীতকালে বেঁচে থাকে। বাতাস এবং বৃষ্টির ছিটার মাধ্যমে এর রেণু ছড়ায়। পাতার দীর্ঘ সময় ধরে ভেজা থাকা এবং মাঝারি তাপমাত্রা এই রোগের জন্য অনুকূল।',
          dos: [
            'অ-হোস্ট ফসলের সাথে শস্য পর্যায় করুন।',
            'ভুট্টার ফসলের অবশিষ্টাংশ ব্যবস্থাপনা করুন।',
            'রোগ প্রতিরোধী হাইব্রিড (Ht জিন সহ) লাগান।'
          ],
          donts: [
            'আক্রান্ত ক্ষেতে মিনিমাম টিলেজ সহ একটানা ভুট্টা চাষ এড়িয়ে চলুন।'
          ],
          whatToDoNow: 'রোগের বিকাশ পর্যবেক্ষণ করুন, বিশেষ করে নিচের পাতাগুলিতে। সংবেদনশীল হাইব্রিডে ট্যাসেলিং এর আগে যদি রোগ সক্রিয় থাকে, তবে ছত্রাকনাশক স্প্রে করা উপকারী হতে পারে।',
          culturalPractice: 'শস্য পর্যায়, ফসলের অবশিষ্টাংশ ব্যবস্থাপনা, রোগ প্রতিরোধী হাইব্রিড।',
          chemicalControl: 'স্ট্রোবিলুরিন বা ট্রায়াজোল গ্রুপের সক্রিয় উপাদানযুক্ত ছত্রাকনাশক কার্যকর।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Grape___Black_rot': {
        en: {
          diseaseName: 'Grape - Black Rot',
          description: 'Causes small, circular, reddish-brown spots on leaves that enlarge and develop black borders. On fruit, it starts as small, light brown spots that enlarge and turn black, shriveling into hard "mummies." Can also affect stems and tendrils.',
          whyItHappens: 'Caused by the fungus Guignardia bidwellii. It overwinters in mummified berries and cane lesions. Spores are released in wet conditions and spread by rain splash. Favored by warm, humid weather.',
          dos: [
            'Remove and destroy mummified berries from vines and the ground.',
            'Prune out infected canes during dormancy.',
            'Ensure good air circulation through proper canopy management.'
          ],
          donts: [
            'Do not leave infected plant debris in the vineyard.'
          ],
          whatToDoNow: 'Sanitize the vineyard by removing infected material. Apply fungicides preventatively, especially during susceptible growth stages and wet periods.',
          culturalPractice: 'Sanitation (removing mummies and infected canes), canopy management.',
          chemicalControl: 'Fungicides containing active ingredients like Mancozeb, Myclobutanil, or Azoxystrobin are commonly used.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'আঙ্গুর - ব্ল্যাক রট',
          description: 'পাতার উপর ছোট, গোলাকার, লালচে-বাদামী দাগ সৃষ্টি করে যা বড় হয়ে কালো কিনারা তৈরি করে। ফলের উপর, এটি ছোট, হালকা বাদামী দাগ হিসাবে শুরু হয় যা বড় হয়ে কালো হয়ে যায় এবং শক্ত "মামি"-তে পরিণত হয়। এটি কাণ্ড এবং টেন্ড্রিলকেও প্রভাবিত করতে পারে।',
          whyItHappens: 'এটি Guignardia bidwellii নামক ছত্রাকের কারণে হয়। এটি মমিকৃত আঙ্গুর এবং আক্রান্ত ডালে শীতকালে বেঁচে থাকে। ভেজা অবস্থায় এর রেণু মুক্ত হয় এবং বৃষ্টির ছিটায় ছড়ায়। উষ্ণ, আর্দ্র আবহাওয়া এই রোগের জন্য অনুকূল।',
          dos: [
            'আঙ্গুরের গাছ এবং মাটি থেকে মমিকৃত আঙ্গুর সরিয়ে ফেলুন এবং নষ্ট করে দিন।',
            'সুপ্তাবস্থায় আক্রান্ত ডালপালা ছেঁটে ফেলুন।',
            'সঠিক ক্যানোপি ব্যবস্থাপনার মাধ্যমে পর্যাপ্ত বায়ু চলাচল নিশ্চিত করুন।'
          ],
          donts: [
            'আঙ্গুর ক্ষেতে আক্রান্ত গাছের আবর্জনা ফেলে রাখবেন না।'
          ],
          whatToDoNow: 'আক্রান্ত উপাদান সরিয়ে আঙ্গুর ক্ষেত পরিচ্ছন্ন করুন। বিশেষ করে সংবেদনশীল বৃদ্ধি পর্যায়ে এবং ভেজা আবহাওয়ায় প্রতিরোধমূলক ছত্রাকনাশক স্প্রে করুন।',
          culturalPractice: 'পরিচ্ছন্নতা (মামি এবং আক্রান্ত ডালপালা অপসারণ), ক্যানোপি ব্যবস্থাপনা।',
          chemicalControl: 'ম্যানকোজেব, মাইক্লোবুটানিল বা অ্যাজোক্সিস্ট্রোবিনের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক সাধারণত ব্যবহৃত হয়।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Grape___Esca_(Black_Measles)': {
        en: {
          diseaseName: 'Grape - Esca (Black Measles)',
          description: 'Symptoms can vary but often include "tiger-stripe" patterns of yellowing or reddish discoloration between veins on leaves. Leaves may eventually dry out and drop. On berries, small, dark spots with a reddish-purple halo may appear, which can crack. In severe cases, the vine may suddenly wilt and die ("apoplexy"). Dark spots or rings can be seen in a cross-section of the wood.',
          whyItHappens: 'Caused by a complex of fungi, primarily Phaeomoniella chlamydospora and Togninia minima, which infect pruning wounds and other wood injuries. The fungi colonize the wood, disrupting water transport and producing toxins.',
          dos: [
            'Protect pruning wounds with a wound protectant.',
            'Prune during dry periods.',
            'Remove and destroy severely infected vines.'
          ],
          donts: [
            'Avoid pruning in wet weather when spores are easily spread.',
            'Do not leave infected wood in the vineyard.'
          ],
          whatToDoNow: 'Prune out affected wood where possible, making cuts into healthy wood. Protect pruning wounds immediately. Monitor vines for severe symptoms.',
          culturalPractice: 'Proper pruning timing and wound protection, removing infected wood.',
          chemicalControl: 'There is no complete cure for Esca. Fungicides can help protect pruning wounds but do not eradicate the infection from within the wood. Some biological control agents are being explored for wound protection.',
          importantNote: 'Management is primarily preventative and focused on protecting pruning wounds. Consult local experts for the best approach.'
        },
        bn: {
          diseaseName: 'আঙ্গুর - এসকা (ব্ল্যাক মিজলস)',
          description: 'লক্ষণগুলি ভিন্ন হতে পারে তবে প্রায়শই পাতার শিরাগুলির মধ্যে হলুদ বা লালচে রঙের "টাইগার-স্ট্রাইপ" প্যাটার্ন অন্তর্ভুক্ত থাকে। পাতা অবশেষে শুকিয়ে ঝরে যেতে পারে। আঙ্গুরের উপর, লালচে-বেগুনি বলয় সহ ছোট, গাঢ় দাগ দেখা যেতে পারে, যা ফাটতে পারে। গুরুতর ক্ষেত্রে, আঙ্গুরের গাছ হঠাৎ শুকিয়ে মরে যেতে পারে ("অ্যাপোপ্লেক্সি")। কাঠের আড়াআড়ি অংশে কালো দাগ বা রিং দেখা যেতে পারে।',
          whyItHappens: 'এটি মূলত Phaeomoniella chlamydospora এবং Togninia minima সহ বিভিন্ন ছত্রাকের কারণে হয়, যা ছাঁটাইয়ের ক্ষত এবং কাঠের অন্যান্য আঘাতের মাধ্যমে সংক্রমিত করে। ছত্রাকগুলি কাঠকে উপনিবেশ করে, জল পরিবহন ব্যাহত করে এবং টক্সিন তৈরি করে।',
          dos: [
            'ছাঁটাইয়ের ক্ষতকে ক্ষত সুরক্ষাকারী (wound protectant) দিয়ে রক্ষা করুন।',
            'শুষ্ক সময়ে ছাঁটাই করুন।',
            'গুরুতরভাবে আক্রান্ত আঙ্গুরের গাছ সরিয়ে ফেলুন এবং নষ্ট করে দিন।'
          ],
          donts: [
            'ভেজা আবহাওয়ায় ছাঁটাই করা থেকে বিরত থাকুন যখন রেণু সহজে ছড়াতে পারে।',
            'আঙ্গুর ক্ষেতে আক্রান্ত কাঠ ফেলে রাখবেন না।'
          ],
          whatToDoNow: 'সম্ভব হলে আক্রান্ত কাঠ ছেঁটে ফেলুন, সুস্থ কাঠ পর্যন্ত কেটে নিন। ছাঁটাইয়ের ক্ষতগুলি অবিলম্বে রক্ষা করুন। গুরুতর লক্ষণের জন্য আঙ্গুরের গাছ পর্যবেক্ষণ করুন।',
          culturalPractice: 'সঠিক সময়ে ছাঁটাই এবং ক্ষতের সুরক্ষা, আক্রান্ত কাঠ অপসারণ।',
          chemicalControl: 'এসকার কোনো সম্পূর্ণ নিরাময় নেই। ছত্রাকনাশক ছাঁটাইয়ের ক্ষত রক্ষা করতে সাহায্য করতে পারে তবে কাঠের মধ্যে থেকে সংক্রমণ নির্মূল করতে পারে না। ক্ষতের সুরক্ষার জন্য কিছু জৈবিক নিয়ন্ত্রণ পদ্ধতি অন্বেষণ করা হচ্ছে।',
          importantNote: 'ব্যবস্থাপনা প্রধানত প্রতিরোধমূলক এবং ছাঁটাইয়ের ক্ষত রক্ষার উপর দৃষ্টি নিবদ্ধ করে। সর্বোত্তম পদ্ধতির জন্য স্থানীয় বিশেষজ্ঞদের পরামর্শ নিন।'
        }
      },
      'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': {
        en: {
          diseaseName: 'Grape - Leaf Blight (Isariopsis Leaf Spot)',
          description: 'Causes small, dark, angular spots on leaves, often with a narrow border. Spots may merge to form larger areas. Under humid conditions, a dark, fuzzy growth may be visible on the underside of the spots. Severe infection can lead to premature leaf drop.',
          whyItHappens: 'Caused by the fungus Pseudocercospora vitis (formerly Isariopsis clavispora). The fungus overwinters in infected leaves on the ground. Spores are spread by wind and rain splash, especially in warm, wet conditions.',
          dos: [
            'Rake and destroy fallen leaves.',
            'Ensure good air circulation in the canopy.'
          ],
          donts: [
            'Do not leave infected leaves in the vineyard.',
            'Avoid practices that keep foliage wet for extended periods.'
          ],
          whatToDoNow: 'Remove and destroy infected leaves. Improve air circulation. Apply fungicides if the disease is developing rapidly, particularly during susceptible growth stages.',
          culturalPractice: 'Sanitation (removing fallen leaves), canopy management.',
          chemicalControl: 'Fungicides containing active ingredients like Mancozeb or Myclobutanil can be effective preventatively.',
          importantNote: 'Verify specific product recommendations and application timings with local agricultural extension.'
        },
        bn: {
          diseaseName: 'আঙ্গুর - লিফ ব্লাইট (ইসারিয়োপসিস লিফ স্পট)',
          description: 'পাতার উপর ছোট, গাঢ়, কৌণিক দাগ সৃষ্টি করে, প্রায়শই একটি সরু কিনারা সহ। দাগগুলি একত্রিত হয়ে বড় এলাকা তৈরি করতে পারে। আর্দ্র পরিস্থিতিতে, দাগের নিচের পৃষ্ঠে গাঢ়, তুলতুলে বৃদ্ধি দৃশ্যমান হতে পারে। গুরুতর সংক্রমণে পাতা অকালে ঝরে পড়তে পারে।',
          whyItHappens: 'এটি Pseudocercospora vitis (পূর্বে Isariopsis clavispora) নামক ছত্রাকের কারণে হয়। ছত্রাকটি মাটিতে থাকা আক্রান্ত পাতায় শীতকালে বেঁচে থাকে। উষ্ণ, ভেজা পরিস্থিতিতে বাতাস এবং বৃষ্টির ছিটায় এর রেণু ছড়ায়।',
          dos: [
            'ঝরে পড়া পাতা সংগ্রহ করে নষ্ট করে দিন।',
            'ক্যানোপিতে পর্যাপ্ত বায়ু চলাচল নিশ্চিত করুন।'
          ],
          donts: [
            'আঙ্গুর ক্ষেতে আক্রান্ত পাতা ফেলে রাখবেন না।',
            'এমন অভ্যাস পরিহার করুন যা পাতার আর্দ্রতা দীর্ঘ সময় ধরে রাখে।'
          ],
          whatToDoNow: 'আক্রান্ত পাতা সরিয়ে ফেলুন এবং নষ্ট করে দিন। বায়ু চলাচল উন্নত করুন। যদি রোগ দ্রুত বিকাশ লাভ করে, বিশেষ করে সংবেদনশীল বৃদ্ধি পর্যায়ে, তবে ছত্রাকনাশক স্প্রে করুন।',
          culturalPractice: 'পরিচ্ছন্নতা (ঝরে পড়া পাতা অপসারণ), ক্যানোপি ব্যবস্থাপনা।',
          chemicalControl: 'ম্যানকোজেব বা মাইক্লোবুটানিলের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক প্রতিরোধমূলকভাবে কার্যকর হতে পারে।',
          importantNote: 'স্থানীয় কৃষি সম্প্রসারণ অধিদপ্তরের সাথে নির্দিষ্ট পণ্যের সুপারিশ এবং প্রয়োগের সময় যাচাই করে নিন।'
        }
      },
      'Orange___Haunglongbing_(Citrus_greening)': {
        en: {
          diseaseName: 'Orange - Huanglongbing (Citrus Greening)',
          description: 'Causes asymmetrical yellowing or mottling of leaves, often on one side of the leaf or branch. Leaves may be small and upright. Fruit on affected branches is often small, lopsided, poorly colored (green at the bottom), and has a bitter taste with aborted seeds. Symptoms can vary and may resemble nutritional deficiencies.',
          whyItHappens: 'Caused by a bacterium (Candidatus Liberibacter asiaticus) that is primarily spread by the Asian citrus psyllid insect. Once a tree is infected, there is no cure, and it will eventually decline and die.',
          dos: [
            'Inspect trees regularly for symptoms and the presence of the Asian citrus psyllid.',
            'Use certified disease-free nursery stock.',
            'Control Asian citrus psyllid populations.',
            'Remove and destroy infected trees promptly to prevent spread.'
          ],
          donts: [
            'Do not plant infected trees.',
            'Do not move infected plant material.'
          ],
          whatToDoNow: 'Confirm diagnosis with a local expert. Implement psyllid management strategies. If confirmed, remove and destroy infected trees to protect healthy ones.',
          culturalPractice: 'Use certified disease-free stock, psyllid control, remove infected trees.',
          chemicalControl: 'Insecticides are used to control the Asian citrus psyllid vector. There is no effective chemical treatment to cure infected trees.',
          importantNote: 'Management focuses on preventing the spread of the psyllid and removing infected trees. Consult local agricultural authorities for specific vector management strategies and regulations.'
        }
      },
      'Peach___Bacterial_spot': {
        en: {
          diseaseName: 'Peach - Bacterial Spot',
          description: 'Causes small, dark, angular spots on leaves, often with a yellow halo. Spots may fall out, giving a "shot-hole" appearance. Leaves may turn yellow and drop prematurely. On fruit, it causes small, dark, sunken spots that can crack. Lesions can also occur on twigs.',
          whyItHappens: 'Caused by the bacterium Xanthomonas arboricola pv. pruni. The bacteria overwinter in twig cankers. Spread by rain splash, wind, and pruning tools. Favored by warm, wet, and windy conditions.',
          dos: [
            'Plant resistant varieties.',
            'Prune out twig cankers during dormancy.',
            'Use clean pruning tools and sanitize them between cuts.',
            'Manage weeds.'
          ],
          donts: [
            'Avoid working in trees when foliage is wet.',
            'Avoid overhead irrigation where possible.'
          ],
          whatToDoNow: 'Prune out visible cankers. Improve air circulation through pruning. Consider applying bactericides protectively, especially during susceptible growth stages.',
          culturalPractice: 'Resistant varieties, pruning cankers, sanitation of tools, weed management.',
          chemicalControl: 'Copper-based bactericides are commonly used, often applied during dormancy and the growing season. Antibiotics like Oxytetracycline may also be used in some regions (check local regulations).',
          importantNote: 'Resistance to copper can develop. Follow local guidelines for application rates and timings.'
        },
        bn: {
          diseaseName: 'পীচ - ব্যাকটেরিয়াল স্পট',
          description: 'পাতার উপর ছোট, গাঢ়, কৌণিক দাগ সৃষ্টি করে, প্রায়শই একটি হলুদ বলয় সহ। দাগগুলি ছিদ্র হয়ে যেতে পারে, যা "শট-হোল" চেহারার মতো দেখায়। পাতা হলুদ হয়ে অকালে ঝরে পড়তে পারে। ফলের উপর, এটি ছোট, গাঢ়, দেবে যাওয়া দাগ সৃষ্টি করে যা ফাটতে পারে। ডালেগুলিও আক্রান্ত হতে পারে।',
          whyItHappens: 'এটি Xanthomonas arboricola pv. pruni নামক ব্যাকটেরিয়ার কারণে হয়। ব্যাকটেরিয়া ডালের ক্যানকারে শীতকালে বেঁচে থাকে। বৃষ্টি, বাতাস এবং ছাঁটাইয়ের সরঞ্জাম দ্বারা ছড়ায়। উষ্ণ, ভেজা এবং বাতাসযুক্ত পরিস্থিতি এই রোগের জন্য অনুকূল।',
          dos: [
            'রোগ প্রতিরোধী জাত লাগান।',
            'সুপ্তাবস্থায় ডালের ক্যানকার ছেঁটে ফেলুন।',
            'পরিষ্কার ছাঁটাইয়ের সরঞ্জাম ব্যবহার করুন এবং কাটার মাঝে সেগুলি জীবাণুমুক্ত করুন।',
            'আগাছা নিয়ন্ত্রণ করুন।'
          ],
          donts: [
            'পাতা ভেজা থাকা অবস্থায় গাছে কাজ করা এড়িয়ে চলুন।',
            'সম্ভব হলে ওভারহেড সেচ এড়িয়ে চলুন।'
          ],
          whatToDoNow: 'দৃশ্যমান ক্যানকারগুলি ছেঁটে ফেলুন। ছাঁটাইয়ের মাধ্যমে বায়ু চলাচল উন্নত করুন। বিশেষ করে সংবেদনশীল বৃদ্ধি পর্যায়ে প্রতিরোধমূলকভাবে ব্যাকটেরিয়ানাশক স্প্রে করার কথা বিবেচনা করুন।',
          culturalPractice: 'রোগ প্রতিরোধী জাত, ক্যানকার ছাঁটাই, সরঞ্জাম জীবাণুমুক্তকরণ, আগাছা ব্যবস্থাপনা।',
          chemicalControl: 'কপার-ভিত্তিক ব্যাকটেরিয়ানাশক সাধারণত ব্যবহৃত হয়, প্রায়শই সুপ্তাবস্থায় এবং ক্রমবর্ধমান মৌসুমে প্রয়োগ করা হয়। কিছু অঞ্চলে অ্যান্টিবায়োটিক যেমন অক্সিটেট্রাসাইক্লিনও ব্যবহার করা যেতে পারে (স্থানীয় নিয়মাবলী যাচাই করুন)।',
          importantNote: 'কপারের প্রতি প্রতিরোধ ক্ষমতা তৈরি হতে পারে। প্রয়োগের মাত্রা এবং সময় নির্ধারণের জন্য স্থানীয় নির্দেশিকা অনুসরণ করুন।'
        }
      },
      'Pepper,_bell___Bacterial_spot': {
        en: {
          diseaseName: 'Pepper, Bell - Bacterial Spot',
          description: 'Causes small, water-soaked spots on leaves that enlarge and become angular, dark lesions with a gray center and yellow halo. Lesions may fall out, creating a "shot-hole" effect. Can also cause raised, scab-like spots on fruit and elongated lesions on stems. Severe infection leads to defoliation.',
          whyItHappens: 'Caused by the bacterium Xanthomonas campestris pv. vesicatoria. It can be seedborne and survives in plant debris and soil. Spread by rain splash, wind, and contaminated tools. Favored by warm, wet conditions.',
          dos: [
            'Use certified disease-free seed and transplants.',
            'Rotate crops with non-host plants.',
            'Remove plant debris after harvest.',
            'Avoid overhead irrigation.',
            'Manage solanaceous weeds.'
          ],
          donts: [
            'Do not save seed from infected plants.',
            'Avoid working in fields when foliage is wet.',
            'Do not rotate peppers with other susceptible solanaceous crops like tomato, eggplant, or potato if bacterial spot was present.'
          ],
          whatToDoNow: 'Remove and destroy infected plants or plant parts. Improve air circulation. Apply bactericides protectively, especially if conditions favor the disease.',
          culturalPractice: 'Disease-free seed, crop rotation, residue management, avoiding overhead irrigation, weed control.',
          chemicalControl: 'Copper-based bactericides are the primary chemical control. Tank mixing copper with Mancozeb can enhance control and help manage resistance.',
          importantNote: 'Resistance to copper is a concern. Follow local guidelines for application and consider alternating with other approved products if available.'
        }
      },
      'Potato___Early_blight': {
        en: {
          diseaseName: 'Potato - Early Blight',
          description: 'Causes small, dark, circular spots on lower, older leaves, often with target-like concentric rings within the spot. Spots enlarge and can merge. Severe infection leads to yellowing and premature defoliation, starting from the bottom of the plant. Can also cause lesions on stems and tubers.',
          whyItHappens: 'Caused by the fungus Alternaria solani. It overwinters in infected plant debris and soil. Spores are spread by wind and splashing water. Favored by warm temperatures, frequent rainfall, and heavy dews. Stressed or older plants are more susceptible.',
          dos: [
            'Rotate crops with non-host plants.',
            'Manage potato residue.',
            'Maintain plant vigor through proper fertilization and watering.',
            'Avoid overhead irrigation late in the day.'
          ],
          donts: [
            'Do not leave infected debris in the field.',
            'Avoid stressing plants.'
          ],
          whatToDoNow: 'Remove and destroy infected leaves. Improve air circulation. Apply fungicides preventatively, especially when conditions favor the disease or at the first sign of symptoms, focusing on protecting the lower leaves.',
          culturalPractice: 'Crop rotation, residue management, maintaining plant health, irrigation management.',
          chemicalControl: 'Fungicides containing active ingredients like Chlorothalonil, Mancozeb, or Azoxystrobin are commonly used.',
          importantNote: 'Begin applications before the disease becomes widespread. Follow local guidelines for product selection, dosage, and spray intervals.'
        },
        bn: {
          diseaseName: 'আলু - আর্লি ব্লাইট',
          description: 'নিচের, পুরোনো পাতাগুলিতে ছোট, গাঢ়, গোলাকার দাগ সৃষ্টি করে, প্রায়শই দাগের মধ্যে লক্ষ্যবস্তুর মতো বৃত্তাকার রিং থাকে। দাগগুলি বড় হতে পারে এবং একত্রিত হতে পারে। গুরুতর সংক্রমণে গাছের নিচ থেকে পাতা হলুদ হয়ে অকালে ঝরে পড়ে। কাণ্ড এবং আলুতেও দাগ হতে পারে।',
          whyItHappens: 'এটি Alternaria solani নামক ছত্রাকের কারণে হয়। এটি আক্রান্ত ফসলের অবশিষ্টাংশ এবং মাটিতে শীতকালে বেঁচে থাকে। বাতাস এবং বৃষ্টির ছিটার মাধ্যমে এর রেণু ছড়ায়। উষ্ণ তাপমাত্রা, ঘন ঘন বৃষ্টিপাত এবং ভারী শিশির এই রোগের জন্য অনুকূল। দুর্বল বা বয়স্ক গাছপালা বেশি সংবেদনশীল।',
          dos: [
            'অ-হোস্ট ফসলের সাথে শস্য পর্যায় করুন।',
            'আলুর ফসলের অবশিষ্টাংশ ব্যবস্থাপনা করুন।',
            'সঠিক সার এবং জল দেওয়ার মাধ্যমে গাছের শক্তি বজায় রাখুন।',
            'দিনের শেষে ওভারহেড সেচ এড়িয়ে চলুন।'
          ],
          donts: [
            'ক্ষেতে আক্রান্ত আবর্জনা ফেলে রাখবেন না।',
            'গাছকে দুর্বল করা থেকে বিরত থাকুন।'
          ],
          whatToDoNow: 'আক্রান্ত পাতাগুলি সরিয়ে ফেলুন এবং নষ্ট করে দিন। বায়ু চলাচল উন্নত করুন। যদি আবহাওয়া রোগের অনুকূল থাকে বা প্রথম লক্ষণ দেখা দিলে প্রতিরোধমূলকভাবে ছত্রাকনাশক স্প্রে করুন, নিচের পাতাগুলিতে মনোযোগ দিন।',
          culturalPractice: 'শস্য পর্যায়, ফসলের অবশিষ্টাংশ ব্যবস্থাপনা, গাছের স্বাস্থ্য বজায় রাখা, সেচ ব্যবস্থাপনা।',
          chemicalControl: 'ক্লোরোথ্যালোনিল, ম্যানকোজেব বা অ্যাজোক্সিস্ট্রোবিনের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক সাধারণত ব্যবহৃত হয়।',
          importantNote: 'রোগ ব্যাপকভাবে ছড়িয়ে পড়ার আগেই স্প্রে শুরু করুন। পণ্য নির্বাচন, মাত্রা এবং স্প্রে করার বিরতির জন্য স্থানীয় নির্দেশিকা অনুসরণ করুন।'
        }
      },
      'Potato___Late_blight': {
        en: {
          diseaseName: 'Potato - Late Blight',
          description: 'Begins as small, water-soaked lesions on leaves that quickly enlarge into dark brown to black areas, often with a pale green or yellow border. A fuzzy white mold may appear on the underside of lesions in humid conditions. Lesions spread rapidly, causing blighting of leaves and stems. Infected tubers develop firm, reddish-brown rot beneath the skin. This disease can devastate a crop in a short time.',
          whyItHappens: 'Caused by the oomycete Phytophthora infestans. It overwinters in infected potato tubers (in storage or volunteer plants) and plant debris. Spores are spread by wind, rain splash, and infected tubers. Favored by cool temperatures (10-20°C) and high humidity with prolonged leaf wetness.',
          dos: [
            'Use certified disease-free seed tubers.',
            'Remove and destroy infected tubers and volunteer potato plants.',
            'Avoid planting in fields where late blight was severe the previous year.',
            'Ensure good hilling to protect tubers.',
            'Apply fungicides protectively before the disease appears, especially when weather conditions are favorable.'
          ],
          donts: [
            'Do not plant infected seed tubers.',
            'Avoid overhead irrigation, particularly in the evening.',
            'Do not leave infected plant debris in the field.'
          ],
          whatToDoNow: 'Immediately remove and destroy affected leaves and stems. Apply curative fungicides if the disease is detected. Continue protective fungicide applications to prevent further spread. Ensure tubers are well-covered with soil.',
          culturalPractice: 'Use certified seed, sanitation (removing infected tubers/plants/debris), hilling.',
          chemicalControl: 'Fungicides containing active ingredients like Mancozeb, Chlorothalonil (protectants), or Metalaxyl-M, Cymoxanil, Dimethomorph, or Famoxadone (curatives/systemic) are used. Often, a combination of protectant and systemic/curative fungicides is recommended. The document mentions fungicides like Mancozeb, Fenamidone + Mancozeb, Metalaxyl, Dimethomorph, or Cymoxanil + Mancozeb being used in Bangladesh.',
          importantNote: 'Late blight can develop resistance to certain fungicides. Follow a fungicide resistance management strategy recommended by local experts, rotating or mixing different classes of fungicides. Timing of application is critical, often based on weather forecasts or disease advisories.'
        },
        bn: {
          diseaseName: 'আলু - নাবী ধসা',
          description: 'পাতার উপর ছোট, জলভেজা দাগ হিসাবে শুরু হয় যা দ্রুত বড় হয়ে গাঢ় বাদামী থেকে কালো দাগে পরিণত হয়, প্রায়শই হালকা সবুজ বা হলুদ কিনারা সহ। আর্দ্র পরিস্থিতিতে দাগগুলির নিচের পৃষ্ঠে সাদা তুলতুলে ছত্রাক দেখা যেতে পারে। দাগগুলি দ্রুত ছড়ায়, পাতা এবং কাণ্ড ঝলসে দেয়। আক্রান্ত আলুতে ত্বকের নিচে শক্ত, লালচে-বাদামী পচন ধরে। এই রোগ অল্প সময়ে ফসল নষ্ট করে দিতে পারে।',
          whyItHappens: 'এটি Phytophthora infestans নামক ছত্রাক সদৃশ জীব দ্বারা হয়। এটি আক্রান্ত আলুর বীজ (সংরক্ষণে থাকা বা স্বেচ্ছায় জন্মানো গাছ) এবং ফসলের অবশিষ্টাংশে শীতকালে বেঁচে থাকে। বাতাস, বৃষ্টির ছিটানো এবং আক্রান্ত আলুর মাধ্যমে এর রেণু ছড়ায়। ঠান্ডা তাপমাত্রা (১০-২০°সে) এবং উচ্চ আর্দ্রতা সহ পাতার দীর্ঘ সময় ধরে ভেজা থাকা এই রোগের জন্য অনুকূল।',
          dos: [
            'রোগমুক্ত প্রত্যয়িত আলুর বীজ ব্যবহার করুন।',
            'আক্রান্ত আলু এবং স্বেচ্ছায় জন্মানো আলুর গাছ সরিয়ে ফেলুন এবং নষ্ট করে দিন।',
            'আগের বছর যেখানে নাবী ধসা গুরুতর ছিল সেখানে আলু লাগানো এড়িয়ে চলুন।',
            'আলুকে মাটি দিয়ে ভালোভাবে ঢেকে দিন।',
            'রোগ দেখা দেওয়ার আগেই প্রতিরোধমূলকভাবে ছত্রাকনাশক স্প্রে করুন, বিশেষ করে যখন আবহাওয়া অনুকূল থাকে।'
          ],
          donts: [
            'আক্রান্ত আলুর বীজ লাগাবেন না।',
            'বিশেষ করে সন্ধ্যায় ওভারহেড সেচ এড়িয়ে চলুন।',
            'আক্রান্ত ফসলের অবশিষ্টাংশ ক্ষেতে ফেলে রাখবেন না।'
          ],
          whatToDoNow: 'আক্রান্ত পাতা এবং কাণ্ডগুলি অবিলম্বে সরিয়ে ফেলুন এবং নষ্ট করে দিন। রোগ শনাক্ত হলে নিরাময়মূলক ছত্রাকনাশক স্প্রে করুন। রোগ আরও ছড়ানো রোধ করার জন্য প্রতিরোধমূলক ছত্রাকনাশক স্প্রে চালিয়ে যান। আলু যাতে মাটি দিয়ে ভালোভাবে ঢাকা থাকে তা নিশ্চিত করুন।',
          culturalPractice: 'প্রত্যয়িত বীজ ব্যবহার, পরিচ্ছন্নতা (আক্রান্ত আলু/গাছ/আবর্জনা অপসারণ), মাটি দিয়ে ঢেকে দেওয়া (hilling)।',
          chemicalControl: 'ম্যানকোজেব, ক্লোরোথ্যালোনিল (প্রতিরোধমূলক) বা মেটালাক্সিল-এম, সাইমোক্সানিল, ডাইমেথোমর্ফ বা ফ্যামোক্সাডোন (নিরাময়মূলক/সিস্টেমিক) এর মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক ব্যবহার করা হয়। প্রায়শই প্রতিরোধমূলক এবং সিস্টেমিক/নিরাময়মূলক ছত্রাকনাশকের সংমিশ্রণ সুপারিশ করা হয়। ডকুমেন্ট অনুযায়ী বাংলাদেশে ম্যানকোজেব, ফেনামিডোন + ম্যানকোজেব, মেটালাক্সিল, ডাইমেথোমর্ফ বা সাইমোক্সানিল + ম্যানকোজেব ব্যবহার করা হয়।',
          importantNote: 'নাবী ধসা কিছু নির্দিষ্ট ছত্রাকনাশকের প্রতি প্রতিরোধ ক্ষমতা তৈরি করতে পারে। স্থানীয় বিশেষজ্ঞদের সুপারিশ অনুযায়ী একটি ছত্রাকনাশক প্রতিরোধ ব্যবস্থাপনা কৌশল অনুসরণ করুন, বিভিন্ন গ্রুপের ছত্রাকনাশক পর্যায়ক্রমে বা মিশ্রিত করে ব্যবহার করুন। প্রয়োগের সময় অত্যন্ত গুরুত্বপূর্ণ, যা প্রায়শই আবহাওয়ার পূর্বাভাস বা রোগ সতর্কতার উপর ভিত্তি করে নির্ধারিত হয়।'
        }
      },
      'Squash___Powdery_mildew': {
        en: {
          diseaseName: 'Squash - Powdery Mildew',
          description: 'Appears as white, powdery patches on the surface of leaves, stems, and sometimes fruit. Patches enlarge and can cover the entire leaf surface. Infected leaves may turn yellow, brown, and dry out prematurely. Severe infection can reduce yield and quality.',
          whyItHappens: 'Caused by various fungi (e.g., Podosphaera xanthii, Erysiphe cichoracearum). It thrives in warm to hot, dry conditions with high humidity, but does not require leaf wetness for infection. Spores are spread by wind. Shaded areas and poor air circulation favor the disease.',
          dos: [
            'Plant in areas with good sunlight and air circulation.',
            'Use resistant varieties if available.',
            'Space plants adequately.',
            'Remove heavily infected leaves.'
          ],
          donts: [
            'Avoid overcrowding plants.',
            'Avoid excessive nitrogen fertilization, which can lead to lush, susceptible growth.'
          ],
          whatToDoNow: 'Remove and destroy heavily infected leaves. Improve air circulation. Apply fungicides at the first sign of symptoms to prevent spread.',
          culturalPractice: 'Resistant varieties, proper spacing, sunlight, air circulation, removing infected leaves.',
          chemicalControl: 'Fungicides containing active ingredients like Sulfur, Myclobutanil, Azoxystrobin, or Potassium bicarbonate can be effective. Horticultural oils or Neem oil can also have some effect.',
          importantNote: 'Sulfur can cause plant injury in hot weather. Follow product label instructions carefully.'
        },
        bn: {
          diseaseName: 'কুমড়া - পাউডারি মিলডিউ',
          description: 'পাতা, কাণ্ড এবং কখনও কখনও ফলের পৃষ্ঠে সাদা, পাউডারের মতো দাগ হিসাবে দেখা যায়। দাগগুলি বড় হয় এবং পুরো পাতার পৃষ্ঠ ঢেকে ফেলতে পারে। আক্রান্ত পাতা হলুদ, বাদামী হয়ে অকালে শুকিয়ে যেতে পারে। গুরুতর সংক্রমণ ফলন এবং গুণমান কমিয়ে দিতে পারে।',
          whyItHappens: 'বিভিন্ন ছত্রাকের কারণে হয় (যেমন Podosphaera xanthii, Erysiphe cichoracearum)। এটি উচ্চ আর্দ্রতা সহ উষ্ণ থেকে গরম, শুষ্ক পরিস্থিতিতে বৃদ্ধি পায়, তবে সংক্রমণের জন্য পাতার আর্দ্রতার প্রয়োজন হয় না। বাতাস দ্বারা এর রেণু ছড়ায়। ছায়াযুক্ত স্থান এবং অপর্যাপ্ত বায়ু চলাচল এই রোগের জন্য অনুকূল।',
          dos: [
            'পর্যাপ্ত সূর্যালোক এবং বায়ু চলাচল আছে এমন জায়গায় গাছ লাগান।',
            'সম্ভব হলে রোগ প্রতিরোধী জাত ব্যবহার করুন।',
            'গাছপালা পর্যাপ্ত দূরত্বে লাগান।',
            'গুরুতরভাবে আক্রান্ত পাতাগুলি সরিয়ে ফেলুন।'
          ],
          donts: [
            'গাছপালা খুব ঘন করে লাগাবেন না।',
            'অতিরিক্ত নাইট্রোজেন সার ব্যবহার করা থেকে বিরত থাকুন, যা সংবেদনশীল বৃদ্ধি ঘটাতে পারে।'
          ],
          whatToDoNow: 'গুরুতরভাবে আক্রান্ত পাতাগুলি সরিয়ে ফেলুন এবং নষ্ট করে দিন। বায়ু চলাচল উন্নত করুন। প্রথম লক্ষণ দেখা দিলে ছত্রাকনাশক স্প্রে করুন, ছড়ানো রোধের উপর মনোযোগ দিন।',
          culturalPractice: 'রোগ প্রতিরোধী জাত, সঠিক দূরত্ব, সূর্যালোক, বায়ু চলাচল, আক্রান্ত পাতা অপসারণ।',
          chemicalControl: 'সালফার, মাইক্লোবুটানিল, অ্যাজোক্সিস্ট্রোবিন বা পটাশিয়াম বাইকার্বোনেটের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক কার্যকর হতে পারে। হর্টিকালচারাল তেল বা নিম তেলেরও কিছু প্রভাব থাকতে পারে।',
          importantNote: 'গরম আবহাওয়ায় সালফার গাছের ক্ষতি করতে পারে। পণ্যের লেবেলের নির্দেশাবলী সাবধানে অনুসরণ করুন।'
        }
      },
      'Strawberry___Leaf_scorch': {
        en: {
          diseaseName: 'Strawberry - Leaf Scorch',
          description: 'Causes small, irregular, dark purple spots on the upper surface of leaves. Spots may enlarge and merge, giving the leaves a scorched appearance. Severe infection can reduce plant vigor and yield. Can also affect calyxes and fruit.',
          whyItHappens: 'Caused by the fungus Diplocarpon earlianum. It overwinters in infected leaves. Spores are spread by splashing water (rain or irrigation) and wind. Favored by warm, wet conditions.',
          dos: [
            'Use certified disease-free plants.',
            'Remove and destroy infected leaves after harvest or during renovation.',
            'Ensure good air circulation around plants.',
            'Consider using drip irrigation instead of overhead irrigation.'
          ],
          donts: [
            'Do not leave infected leaves in the field.',
            'Avoid overhead irrigation that keeps foliage wet for extended periods.'
          ],
          whatToDoNow: 'Remove and destroy affected leaves. Improve air circulation. Apply fungicides preventatively, especially during periods of leaf wetness and new growth.',
          culturalPractice: 'Use certified plants, sanitation (removing infected leaves), air circulation, irrigation method.',
          chemicalControl: 'Fungicides containing active ingredients like Captan or Myclobutanil can be effective.',
          importantNote: 'Follow local guidelines for product selection, dosage, and application timing.'
        },
        bn: {
          diseaseName: 'স্ট্রবেরি - লিফ স্কর্চ',
          description: 'পাতার উপরের পৃষ্ঠে ছোট, অনিয়মিত, গাঢ় বেগুনি দাগ সৃষ্টি করে। দাগগুলি বড় হতে পারে এবং একত্রিত হয়ে পাতাকে ঝলসে যাওয়া চেহারার মতো দেখাতে পারে। গুরুতর সংক্রমণ গাছের শক্তি এবং ফলন কমিয়ে দিতে পারে। এটি ক্যালিক্স এবং ফলকেও প্রভাবিত করতে পারে।',
          whyItHappens: 'এটি Diplocarpon earlianum নামক ছত্রাকের কারণে হয়। এটি আক্রান্ত পাতায় শীতকালে বেঁচে থাকে। জল ছিটানো (বৃষ্টি বা সেচ) এবং বাতাস দ্বারা এর রেণু ছড়ায়। উষ্ণ, ভেজা পরিস্থিতি এই রোগের জন্য অনুকূল।',
          dos: [
            'রোগমুক্ত প্রত্যয়িত চারা ব্যবহার করুন।',
            'ফসল তোলার পর বা সংস্কারের সময় আক্রান্ত পাতাগুলি সরিয়ে ফেলুন এবং নষ্ট করে দিন।',
            'গাছের চারপাশে পর্যাপ্ত বায়ু চলাচল নিশ্চিত করুন।',
            'ওভারহেড সেচের পরিবর্তে ড্রিপ সেচ ব্যবহার করার কথা বিবেচনা করুন।'
          ],
          donts: [
            'ক্ষেতে আক্রান্ত পাতা ফেলে রাখবেন না।',
            'এমন ওভারহেড সেচ এড়িয়ে চলুন যা পাতা দীর্ঘ সময় ধরে ভিজিয়ে রাখে।'
          ],
          whatToDoNow: 'আক্রান্ত পাতাগুলি সরিয়ে ফেলুন এবং নষ্ট করে দিন। বায়ু চলাচল উন্নত করুন। বিশেষ করে পাতা ভেজা থাকা এবং নতুন বৃদ্ধির সময়কালে প্রতিরোধমূলকভাবে ছত্রাকনাশক স্প্রে করুন।',
          culturalPractice: 'প্রত্যয়িত চারা ব্যবহার, পরিচ্ছন্নতা (আক্রান্ত পাতা অপসারণ), বায়ু চলাচল, সেচ পদ্ধতি।',
          chemicalControl: 'ক্যাপ্টান বা মাইক্লোবুটানিলের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক কার্যকর হতে পারে।',
          importantNote: 'পণ্য নির্বাচন, মাত্রা এবং প্রয়োগের সময় নির্ধারণের জন্য স্থানীয় নির্দেশিকা অনুসরণ করুন।'
        }
      },
      'Tomato___Bacterial_spot': {
        en: {
          diseaseName: 'Tomato - Bacterial Spot',
          description: 'Causes small, water-soaked spots on leaves that enlarge and become angular, dark lesions with a gray center and yellow halo. Lesions may fall out, creating a "shot-hole" effect. Can also cause raised, scab-like spots on fruit and elongated lesions on stems. Severe infection leads to defoliation and reduced fruit quality.',
          whyItHappens: 'Caused by the bacterium Xanthomonas campestris pv. vesicatoria. It can be seedborne and survives in plant debris and soil. Spread by rain splash, wind, and contaminated tools. Favored by warm, wet conditions.',
          dos: [
            'Use certified disease-free seed and transplants.',
            'Rotate crops with non-host plants.',
            'Remove plant debris after harvest.',
            'Avoid overhead irrigation.',
            'Manage solanaceous weeds.'
          ],
          donts: [
            'Do not save seed from infected plants.',
            'Avoid working in fields when foliage is wet.',
            'Do not rotate tomatoes with other susceptible solanaceous crops like pepper, eggplant, or potato if bacterial spot was present.'
          ],
          whatToDoNow: 'Remove and destroy infected plants or plant parts. Improve air circulation. Apply bactericides protectively, especially if conditions favor the disease.',
          culturalPractice: 'Disease-free seed, crop rotation, residue management, avoiding overhead irrigation, weed control.',
          chemicalControl: 'Copper-based bactericides are the primary chemical control. Tank mixing copper with Mancozeb can enhance control and help manage resistance.',
          importantNote: 'Resistance to copper is a concern. Follow local guidelines for application and consider alternating with other approved products if available.'
        }
      },
      'Tomato___Early_blight': {
        en: {
          diseaseName: 'Tomato - Early Blight',
          description: 'Causes small, dark, circular spots on lower, older leaves, often with target-like concentric rings within the spot. Spots enlarge and can merge. Severe infection leads to yellowing and premature defoliation, starting from the bottom of the plant. Can also cause lesions on stems and fruit.',
          whyItHappens: 'Caused by the fungus Alternaria solani. It overwinters in infected plant debris and soil. Spores are spread by wind and splashing water. Favored by warm temperatures, frequent rainfall, and heavy dews. Stressed or older plants are more susceptible.',
          dos: [
            'Rotate crops with non-host plants.',
            'Manage tomato residue.',
            'Maintain plant vigor through proper fertilization and watering.',
            'Avoid overhead irrigation late in the day.'
          ],
          donts: [
            'Do not leave infected debris in the field.',
            'Avoid stressing plants.'
          ],
          whatToDoNow: 'Remove and destroy infected leaves. Improve air circulation. Apply fungicides preventatively, especially when conditions favor the disease or at the first sign of symptoms, focusing on protecting the lower leaves.',
          culturalPractice: 'Crop rotation, residue management, maintaining plant health, irrigation management.',
          chemicalControl: 'Fungicides containing active ingredients like Chlorothalonil, Mancozeb, or Azoxystrobin are commonly used.',
          importantNote: 'Begin applications before the disease becomes widespread. Follow local guidelines for product selection, dosage, and spray intervals.'
        },
        bn: {
          diseaseName: 'টমেটো - আর্লি ব্লাইট',
          description: 'নিচের, পুরোনো পাতাগুলিতে ছোট, গাঢ়, গোলাকার দাগ সৃষ্টি করে, প্রায়শই দাগের মধ্যে লক্ষ্যবস্তুর মতো বৃত্তাকার রিং থাকে। দাগগুলি বড় হতে পারে এবং একত্রিত হতে পারে। গুরুতর সংক্রমণে গাছের নিচ থেকে পাতা হলুদ হয়ে অকালে ঝরে পড়ে। কাণ্ড এবং ফলেও দাগ হতে পারে।',
          whyItHappens: 'এটি Alternaria solani নামক ছত্রাকের কারণে হয়। এটি আক্রান্ত ফসলের অবশিষ্টাংশ এবং মাটিতে শীতকালে বেঁচে থাকে। বাতাস এবং বৃষ্টির ছিটার মাধ্যমে এর রেণু ছড়ায়। উষ্ণ তাপমাত্রা, ঘন ঘন বৃষ্টিপাত এবং ভারী শিশির এই রোগের জন্য অনুকূল। দুর্বল বা বয়স্ক গাছপালা বেশি সংবেদনশীল।',
          dos: [
            'অ-হোস্ট ফসলের সাথে শস্য পর্যায় করুন।',
            'টমেটোর ফসলের অবশিষ্টাংশ ব্যবস্থাপনা করুন।',
            'সঠিক সার এবং জল দেওয়ার মাধ্যমে গাছের শক্তি বজায় রাখুন।',
            'দিনের শেষে ওভারহেড সেচ এড়িয়ে চলুন।'
          ],
          donts: [
            'ক্ষেতে আক্রান্ত আবর্জনা ফেলে রাখবেন না।',
            'গাছকে দুর্বল করা থেকে বিরত থাকুন।'
          ],
          whatToDoNow: 'আক্রান্ত পাতাগুলি সরিয়ে ফেলুন এবং নষ্ট করে দিন। বায়ু চলাচল উন্নত করুন। যদি আবহাওয়া রোগের অনুকূল থাকে বা প্রথম লক্ষণ দেখা দিলে প্রতিরোধমূলকভাবে ছত্রাকনাশক স্প্রে করুন, নিচের পাতাগুলিতে মনোযোগ দিন।',
          culturalPractice: 'শস্য পর্যায়, ফসলের অবশিষ্টাংশ ব্যবস্থাপনা, গাছের স্বাস্থ্য বজায় রাখা, সেচ ব্যবস্থাপনা।',
          chemicalControl: 'ক্লোরোথ্যালোনিল, ম্যানকোজেব বা অ্যাজোক্সিস্ট্রোবিনের মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক সাধারণত ব্যবহৃত হয়।',
          importantNote: 'রোগ ব্যাপকভাবে ছড়িয়ে পড়ার আগেই স্প্রে শুরু করুন। পণ্য নির্বাচন, মাত্রা এবং স্প্রে করার বিরতির জন্য স্থানীয় নির্দেশিকা অনুসরণ করুন।'
        }
      },
      'Tomato___Late_blight': {
        en: {
          diseaseName: 'Tomato - Late Blight',
          description: 'Begins as small, water-soaked lesions on leaves that quickly enlarge into dark brown to black areas, often with a pale green or yellow border. A fuzzy white mold may appear on the underside of lesions in humid conditions. Lesions spread rapidly, causing blighting of leaves and stems. Infected fruit develop firm, brown, sunken areas. This disease can devastate a crop in a short time.',
          whyItHappens: 'Caused by the oomycete Phytophthora infestans. It overwinters in infected plant debris and volunteer solanaceous plants (like potato and tomato). Spores are spread by wind, rain splash, and infected plant material. Favored by cool temperatures (10-20°C) and high humidity with prolonged leaf wetness.',
          dos: [
            'Use certified disease-free seed or transplants.',
            'Remove and destroy infected plant debris and volunteer solanaceous plants.',
            'Avoid planting in fields where late blight was severe the previous year.',
            'Apply fungicides protectively before the disease appears, especially when weather conditions are favorable.'
          ],
          donts: [
            'Do not plant infected seed or transplants.',
            'Avoid overhead irrigation, particularly in the evening.',
            'Do not leave infected plant debris in the field.'
          ],
          whatToDoNow: 'Immediately remove and destroy affected leaves and stems. Apply curative fungicides if the disease is detected. Continue protective fungicide applications to prevent further spread.',
          culturalPractice: 'Use certified seed/transplants, sanitation (removing infected plants/debris), crop rotation.',
          chemicalControl: 'Fungicides containing active ingredients like Mancozeb, Chlorothalonil (protectants), or Metalaxyl-M, Cymoxanil, Dimethomorph, or Famoxadone (curatives/systemic) are used. Often, a combination of protectant and systemic/curative fungicides is recommended. The document mentions fungicides like Mancozeb, Fenamidone + Mancozeb, Metalaxyl, Dimethomorph, or Cymoxanil + Mancozeb being used in Bangladesh for potato late blight, which is caused by the same pathogen and treatments are often similar for tomato.',
          importantNote: 'Late blight can develop resistance to certain fungicides. Follow a fungicide resistance management strategy recommended by local experts, rotating or mixing different classes of fungicides. Timing of application is critical, often based on weather forecasts or disease advisories.'
        },
        bn: {
          diseaseName: 'টমেটো - নাবী ধসা',
          description: 'পাতার উপর ছোট, জলভেজা দাগ হিসাবে শুরু হয় যা দ্রুত বড় হয়ে গাঢ় বাদামী থেকে কালো দাগে পরিণত হয়, প্রায়শই হালকা সবুজ বা হলুদ কিনারা সহ। আর্দ্র পরিস্থিতিতে দাগগুলির নিচের পৃষ্ঠে সাদা তুলতুলে ছত্রাক দেখা যেতে পারে। দাগগুলি দ্রুত ছড়ায়, পাতা এবং কাণ্ড ঝলসে দেয়। আক্রান্ত ফলে শক্ত, বাদামী, দেবে যাওয়া অংশ তৈরি হয়। এই রোগ অল্প সময়ে ফসল নষ্ট করে দিতে পারে।',
          whyItHappens: 'এটি Phytophthora infestans নামক ছত্রাক সদৃশ জীব দ্বারা হয়। এটি আক্রান্ত ফসলের অবশিষ্টাংশ এবং স্বেচ্ছায় জন্মানো সোলানেসিয়াস গাছ (যেমন আলু এবং টমেটো) এ শীতকালে বেঁচে থাকে। বাতাস, বৃষ্টির ছিটানো এবং আক্রান্ত গাছের উপাদানের মাধ্যমে এর রেণু ছড়ায়। ঠান্ডা তাপমাত্রা (১০-২০°সে) এবং উচ্চ আর্দ্রতা সহ পাতার দীর্ঘ সময় ধরে ভেজা থাকা এই রোগের জন্য অনুকূল।',
          dos: [
            'রোগমুক্ত প্রত্যয়িত বীজ বা চারা ব্যবহার করুন।',
            'আক্রান্ত ফসলের অবশিষ্টাংশ এবং স্বেচ্ছায় জন্মানো সোলানেসিয়াস গাছগুলি সরিয়ে ফেলুন এবং নষ্ট করে দিন।',
            'আগের বছর যেখানে নাবী ধসা গুরুতর ছিল সেখানে টমেটো লাগানো এড়িয়ে চলুন।',
            'রোগ দেখা দেওয়ার আগেই প্রতিরোধমূলকভাবে ছত্রাকনাশক স্প্রে করুন, বিশেষ করে যখন আবহাওয়া অনুকূল থাকে।'
          ],
          donts: [
            'আক্রান্ত বীজ বা চারা লাগাবেন না।',
            'বিশেষ করে সন্ধ্যায় ওভারহেড সেচ এড়িয়ে চলুন।',
            'আক্রান্ত ফসলের অবশিষ্টাংশ ক্ষেতে ফেলে রাখবেন না।'
          ],
          whatToDoNow: 'আক্রান্ত পাতা এবং কাণ্ডগুলি অবিলম্বে সরিয়ে ফেলুন এবং নষ্ট করে দিন। রোগ শনাক্ত হলে নিরাময়মূলক ছত্রাকনাশক স্প্রে করুন। রোগ আরও ছড়ানো রোধ করার জন্য প্রতিরোধমূলক ছত্রাকনাশক স্প্রে চালিয়ে যান।',
          culturalPractice: 'প্রত্যয়িত বীজ/চারা ব্যবহার, পরিচ্ছন্নতা (আক্রান্ত গাছ/আবর্জনা অপসারণ), শস্য পর্যায়।',
          chemicalControl: 'ম্যানকোজেব, ক্লোরোথ্যালোনিল (প্রতিরোধমূলক) বা মেটালাক্সিল-এম, সাইমোক্সানিল, ডাইমেথোমর্ফ বা ফ্যামোক্সাডোন (নিরাময়মূলক/সিস্টেমিক) এর মতো সক্রিয় উপাদানযুক্ত ছত্রাকনাশক ব্যবহার করা হয়। প্রায়শই প্রতিরোধমূলক এবং সিস্টেমিক/নিরাময়মূলক ছত্রাকনাশকের সংমিশ্রণ সুপারিশ করা হয়। ডকুমেন্ট অনুযায়ী একই জীবাণু দ্বারা সৃষ্ট আলুর নাবী ধসার জন্য বাংলাদেশে ম্যানকোজেব, ফেনামিডোন + ম্যানকোজেব, মেটালাক্সিল, ডাইমেথোমর্ফ বা সাইমোক্সানিল + ম্যানকোজেব ব্যবহার করা হয়, এবং টমেটোর জন্যও চিকিৎসা প্রায়শই একই রকম হয়।',
          importantNote: 'নাবী ধসা কিছু নির্দিষ্ট ছত্রাকনাশকের প্রতি প্রতিরোধ ক্ষমতা তৈরি করতে পারে। স্থানীয় বিশেষজ্ঞদের সুপারিশ অনুযায়ী একটি ছত্রাকনাশক প্রতিরোধ ব্যবস্থাপনা কৌশল অনুসরণ করুন, বিভিন্ন গ্রুপের ছত্রাকনাশক পর্যায়ক্রমে বা মিশ্রিত করে ব্যবহার করুন। প্রয়োগের সময় অত্যন্ত গুরুত্বপূর্ণ, যা প্রায়শই আবহাওয়ার পূর্বাভাস বা রোগ সতর্কতার উপর ভিত্তি করে নির্ধারিত হয়।'
        }
      },
      'Tomato___Leaf_Mold': {
        en: {
          diseaseName: 'Tomato - Leaf Mold',
          description: 'Primarily affects leaves, typically starting on older, lower leaves. Symptoms on the upper leaf surface are pale green or yellow spots with indefinite borders. On the underside of the leaf, olive-green to brown, velvety fungal growth appears, often in patches corresponding to the spots on the upper surface. Severe infection can cause leaves to die and drop prematurely. Fruit infection is rare but can occur near the stem end.',
          whyItHappens: 'Caused by the fungus Passalora fulva (formerly Cladosporium fulvum). It thrives in high humidity (above 85%) and moderate temperatures. Spores are spread by wind, air currents, splashing water, tools, and workers. It can survive in infected plant debris and greenhouse structures.',
          dos: [
            'Ensure good air circulation around plants (pruning, spacing).',
            'Reduce humidity in greenhouses by heating and venting.',
            'Use resistant varieties if available.',
            'Remove and destroy infected plant debris.'
          ],
          donts: [
            'Avoid overcrowding plants.',
            'Do not work in plants when foliage is wet if leaf mold is present.'
          ],
          whatToDoNow: 'Remove and destroy infected leaves. Improve ventilation and reduce humidity, especially in enclosed spaces. Apply fungicides protectively if conditions favor the disease or at the first sign of symptoms.',
          culturalPractice: 'Resistant varieties, ventilation, spacing, removing infected leaves, sanitation.',
          chemicalControl: 'Fungicides containing active ingredients like Chlorothalonil, Mancozeb, or products in the strobilurin or triazole groups can be effective.',
          importantNote: 'Ensure good spray coverage, particularly on the underside of leaves.'
        }
      },
      'Tomato___Septoria_leaf_spot': {
        en: {
          diseaseName: 'Tomato - Septoria Leaf Spot',
          description: 'Causes numerous small, circular spots on leaves, often with a dark border and a tiny black dot (pycnidium) in the center. Spots are typically ¼ inch or less in diameter. Severe infection leads to yellowing and premature defoliation, starting from the bottom of the plant and moving upwards. Can also affect stems and calyxes but rarely fruit.',
          whyItHappens: 'Caused by the fungus Septoria lycopersici. It overwinters in infected plant debris and on volunteer solanaceous plants. Spores are spread by splashing water (rain or irrigation), wind, tools, and insects. Favored by warm, wet, and humid conditions.',
          dos: [
            'Rotate crops with non-host plants.',
            'Manage tomato residue.',
            'Avoid overhead irrigation.',
            'Provide support for plants (staking, caging) to improve air circulation and reduce leaf-to-soil contact.'
          ],
          donts: [
            'Do not leave infected debris in the field.',
            'Avoid working in plants when foliage is wet.'
          ],
          whatToDoNow: 'Remove and destroy infected leaves. Improve air circulation. Apply fungicides protectively at the first sign of symptoms, focusing on preventing spread to healthy leaves.',
          culturalPractice: 'Crop rotation, residue management, avoiding overhead irrigation, staking/caging.',
          chemicalControl: 'Fungicides containing active ingredients like Chlorothalonil, Mancozeb, or products in the strobilurin or triazole groups are commonly used.',
          importantNote: 'Regular applications are needed to protect new growth.'
        }
      },
      'Tomato___Spider_mites Two-spotted_spider_mite': {
        en: {
          diseaseName: 'Tomato - Spider Mites (Two-spotted spider mite)',
          description: 'Not a disease caused by a pathogen, but rather damage caused by tiny mites, Tetranychus urticae. Symptoms appear as tiny white or yellow stipples (dots) on the upper surface of leaves. As feeding continues, stipples merge, and leaves may turn yellow, bronze, or gray and become dry and brittle. Fine webbing may be visible on the underside of leaves and between leaves and stems, especially in severe infestations.',
          whyItHappens: 'Caused by feeding activity of spider mites. They thrive in hot, dry conditions and reproduce rapidly. They are often found on the underside of leaves.',
          dos: [
            'Monitor the underside of leaves regularly, especially in hot, dry weather.',
            'Maintain adequate watering to reduce plant stress.',
            'Encourage beneficial insects (e.g., predatory mites, ladybugs) that feed on spider mites.',
            'Use a strong stream of water to dislodge mites.'
          ],
          donts: [
            'Avoid excessive use of broad-spectrum insecticides, which can kill natural predators and lead to spider mite outbreaks.'
          ],
          whatToDoNow: 'Confirm the presence of mites (they look like tiny moving dots). If infestation is localized, remove affected leaves. For widespread infestations, consider applying miticides or using biological control agents.',
          culturalPractice: 'Monitoring, proper watering, using a water spray.',
          biologicalControl: 'Introduce predatory mites.', // Added biological control field
          chemicalControl: 'Miticides specifically targeting spider mites are needed. Common active ingredients include Abamectin, Bifenazate, or Spiromesifen. Insecticides are generally not effective against mites and can worsen the problem. Horticultural oils or insecticidal soaps can also be used, requiring direct contact with the mites.',
          importantNote: 'Apply miticides to the underside of leaves where mites are most active. Rotate different classes of miticides to prevent resistance.'
        }
      },
      'Tomato___Target_Spot': {
        en: {
          diseaseName: 'Tomato - Target Spot',
          description: 'Causes small, dark, circular spots on leaves, often with a pale center and distinct concentric rings, resembling a target. Spots can be up to ½ inch in diameter. May cause yellowing around the spots. Severe infection leads to defoliation. Can also affect stems, petioles, and fruit (small, dark, slightly sunken spots).',
          whyItHappens: 'Caused by the fungus Corynespora cassiicola. It survives in infected plant debris and soil. Spores are spread by wind, rain splash, and contaminated tools. Favored by warm temperatures and high humidity or prolonged leaf wetness.',
          dos: [
            'Rotate crops with non-host plants.',
            'Manage tomato residue.',
            'Use resistant varieties if available.',
            'Avoid overhead irrigation.'
          ],
          donts: [
            'Do not leave infected debris in the field.',
            'Avoid working in plants when foliage is wet.'
          ],
          whatToDoNow: 'Remove and destroy infected leaves. Improve air circulation. Apply fungicides protectively at the first sign of symptoms, focusing on preventing spread.',
          culturalPractice: 'Crop rotation, residue management, resistant varieties, avoiding overhead irrigation.',
          chemicalControl: 'Fungicides containing active ingredients like Chlorothalonil, Mancozeb, or products in the strobilurin or triazole groups are commonly used.',
          importantNote: 'Ensure good spray coverage.'
        }
      },
      'Tomato___Tomato_Yellow_Leaf_Curl_Virus': {
        en: {
          diseaseName: 'Tomato - Tomato Yellow Leaf Curl Virus',
          description: 'Caused by a virus. Symptoms include severe stunting of the plant, upward yellow curling of leaves, reduced leaf size, and reduced flowering and fruiting. Infected plants produce few or no marketable fruits. The disease is often more severe in young plants.',
          whyItHappens: 'Caused by the Tomato Yellow Leaf Curl Virus (TYLCV), which is transmitted by the silverleaf whitefly (Bemisia tabaci). The virus is spread when infected whiteflies feed on healthy plants. The virus does not survive in soil or plant debris.',
          dos: [
            'Use resistant or tolerant varieties if available.',
            'Use certified virus-free transplants.',
            'Control whitefly populations using insecticides, biological control agents, or reflective mulches.',
            'Remove and destroy infected plants immediately to reduce the source of the virus.',
            'Manage weeds, especially those that can host whiteflies or the virus.'
          ],
          donts: [
            'Do not plant susceptible varieties in areas with high whitefly populations or a history of the disease.',
            'Do not allow infected plants to remain in the field.'
          ],
          whatToDoNow: 'Identify and remove all plants showing symptoms of the virus. Implement whitefly management strategies to prevent the spread of the virus to healthy plants.',
          culturalPractice: 'Resistant varieties, certified transplants, whitefly management (cultural and biological), removing infected plants, weed management.',
          chemicalControl: 'Insecticides targeting whiteflies are used to manage the vector and reduce virus spread. Active ingredients like Imidacloprid or Dinotefuran may be used (check local regulations). Note that insecticides do not cure the virus in infected plants.',
          importantNote: 'Effective management relies on controlling the whitefly vector and removing infected plants.'
        }
      },
      'Tomato___Tomato_mosaic_virus': {
        en: {
          diseaseName: 'Tomato - Tomato Mosaic Virus',
          description: 'Caused by a virus. Symptoms vary depending on the tomato variety, the virus strain, and environmental conditions. Common symptoms include a mosaic or mottling pattern (light and dark green or yellow areas) on leaves, leaf distortion (curling, crinkling, blistering), stunting of the plant, and reduced fruit size and quality. Some strains can cause brown, necrotic streaks on stems and petioles.',
          whyItHappens: 'Caused by the Tobacco Mosaic Virus (TMV) or Tomato Mosaic Virus (ToMV). These viruses are highly stable and easily spread by mechanical means, including contaminated tools, hands, clothing, and infected plant debris or seeds. They can survive for long periods outside the plant.',
          dos: [
            'Use certified virus-free seed and transplants.',
            'Use resistant varieties if available.',
            'Practice good sanitation: wash hands thoroughly after handling tobacco products or infected plants, sanitize tools (e.g., with a bleach solution or 70% alcohol).',
            'Remove and destroy infected plants immediately.',
            'Avoid using tobacco products while working with tomatoes.'
          ],
          donts: [
            'Do not use tobacco products (cigarettes, chewing tobacco) before handling tomato plants without thoroughly washing hands.',
            'Do not save seed from infected plants.',
            'Avoid handling healthy plants after touching infected ones without sanitizing.'
          ],
          whatToDoNow: 'Identify and remove all plants showing symptoms of the virus. Sanitize all tools and surfaces that may have come into contact with infected plants. Wash hands thoroughly.',
          culturalPractice: 'Use certified seed/transplants, resistant varieties, strict sanitation (hands, tools), removing infected plants, avoiding tobacco products.',
          chemicalControl: 'There are no chemical treatments to cure viral diseases in plants. Insecticides to control potential insect vectors are generally not effective for TMV/ToMV as they are primarily spread mechanically.',
          importantNote: 'Prevention through sanitation and using clean plant material is the key to managing these viruses.'
        }
      }
    };
export const extraTranslations = {
  en: {
    experience: {
      accenture: {
        role: 'Associate Software Engineer Intern',
        location: 'Bangalore, Karnataka',
        date: 'May 2026 - July 2026',
        description:
          'Worked on a US-based enterprise application for Valet Living LLC, contributing to application development and feature implementation.',
        achievements: [
          'Contributed to application development using Node.js, React.js, and SQL.',
          'Worked on frontend and backend features for an enterprise application.',
          'Collaborated with the development team to implement and improve application functionality.',
        ],
      },
    },

    projects: {
      labels: {
        problem: 'The Problem',
        approach: 'The Approach',
        infra: 'Infrastructure & Stack',
        outcome: 'Outcome',
        code: 'Source',
        live: 'Visit',
      },

      lifeconnect: {
        problem:
          'Emergency situations require fast coordination between patients, hospitals, and ambulances, while critical medical resources can be difficult to locate quickly.',
        approach:
          'Built a full-stack emergency coordination platform with a one-tap SOS workflow, role-based access control, geospatial hospital discovery, real-time notifications, and ambulance coordination.',
        outcome:
          'Provides an end-to-end emergency workflow connecting patients, hospitals, and ambulances with real-time status updates and emergency history.',
      },

      algostudio: {
        problem:
          'Learning algorithms from static explanations can make it difficult to understand how data structures and algorithms behave step by step.',
        approach:
          'Built an interactive learning platform with algorithm visualizations, animations, step-by-step execution, user interaction, and complexity information.',
        outcome:
          'Provides interactive visualizations for sorting, graph algorithms, pathfinding, trees, stacks, and queues.',
      },

      hiver: {
        problem:
          'Customer support teams need reliable automation that can identify customer intent and provide useful responses without inventing policies or actions.',
        approach:
          'Built an AI customer support agent using historical AmazonHelp conversations for intent classification, response retrieval, grounded generation, and conservative human escalation.',
        outcome:
          'Creates trustworthy automated responses while escalating cases when the available historical context is insufficient.',
      },

      useranalytics: {
        problem:
          'Understanding how users interact with a webpage requires collecting events and turning raw interaction data into useful session-level insights.',
        approach:
          'Built a full-stack analytics application that tracks page views and clicks, stores events in MongoDB, reconstructs sessions, and visualizes user journeys and click heatmaps.',
        outcome:
          'Provides session analytics, event timelines, user journeys, and click heatmaps through an interactive dashboard.',
      },
    },

    blogs: {
      title: 'Written Logs',
      latest: 'Latest',
      read: 'Read',
      minRead: 'min read',

      scaling: {
        title: 'Building Real-Time Emergency Coordination with Socket.IO',
        excerpt:
          'Exploring the architecture behind real-time SOS coordination, hospital notifications, ambulance assignment, and emergency status updates.',
        content: `Real-time communication is an important part of an emergency coordination platform. When a patient triggers an SOS, nearby hospitals need to receive the request quickly and respond without requiring the patient to repeatedly refresh the application.

The system uses Socket.IO to establish real-time communication between patients, hospitals, and other participants in an emergency case. The emergency workflow is persisted in MongoDB while socket events are used to propagate important state changes.

A typical flow starts when a patient creates an SOS request. The backend persists the emergency, searches for nearby hospitals, ranks the available options, and sends notifications to the relevant hospitals. Once a hospital accepts the emergency, the system can continue updating the active case and ambulance status in real time.

Keeping persistent emergency data separate from real-time socket communication makes the system easier to reason about and allows clients to recover the current state when they reconnect.`,
      },

      websockets: {
        title: 'Visualizing Algorithms Step by Step',
        excerpt:
          'How interactive algorithm visualization can make data structures and algorithms easier to understand through animation and user interaction.',
        content: `Algorithm visualization provides a practical way to understand how an algorithm changes data during execution.

Instead of presenting only the final output, an interactive visualizer can show each comparison, swap, traversal, or graph operation as it happens. This makes the underlying process easier to follow and helps connect theoretical complexity with actual execution.

AlgoStudio focuses on interactive learning through sorting visualizations, graph traversal, shortest path algorithms, minimum spanning tree algorithms, pathfinding, and basic data structures.

Controls such as play, pause, next step, and restart allow learners to inspect an algorithm at their own pace.`,
      },

      zerotrust: {
        title: 'Building a User Analytics Pipeline',
        excerpt:
          'A look at collecting page interactions, reconstructing sessions, and turning raw click events into useful analytics.',
        content: `A useful analytics system starts with reliable event collection. The User Analytics application records events such as page views and clicks along with session information, page URLs, timestamps, and click coordinates.

The backend exposes APIs for receiving events and retrieving session-level information. MongoDB stores the event data while the dashboard transforms those events into understandable views.

Sessions can be inspected through event timelines and user journeys, while click coordinates can be aggregated to create a heatmap for a page.

The architecture keeps tracking, storage, API access, and visualization separated, making the application straightforward to extend with additional event types and analytics.`,
      },
    },
  },

  hi: {
    experience: {
      accenture: {
        role: 'एसोसिएट सॉफ्टवेयर इंजीनियर इंटर्न',
        location: 'बैंगलोर, कर्नाटक',
        date: 'मई 2026 - जुलाई 2026',
        description:
          'Valet Living LLC के लिए एक US-based enterprise application पर काम किया, जिसमें application development और feature implementation में योगदान दिया।',
        achievements: [
          'Node.js, React.js और SQL का उपयोग करके application development में योगदान दिया।',
          'Enterprise application के frontend और backend features पर काम किया।',
          'Development team के साथ मिलकर application functionality को implement और improve किया।',
        ],
      },
    },

    projects: {
      labels: {
        problem: 'समस्या',
        approach: 'दृष्टिकोण',
        infra: 'इन्फ्रास्ट्रक्चर और टेक्नोलॉजी',
        outcome: 'परिणाम',
        code: 'सोर्स',
        live: 'देखें',
      },

      lifeconnect: {
        problem:
          'Emergency situations में patients, hospitals और ambulances के बीच तेज coordination की आवश्यकता होती है, जबकि जरूरी medical resources को जल्दी ढूंढना मुश्किल हो सकता है।',
        approach:
          'One-tap SOS workflow, role-based access control, geospatial hospital discovery, real-time notifications और ambulance coordination के साथ एक full-stack emergency coordination platform बनाया।',
        outcome:
          'Patients, hospitals और ambulances को real-time status updates और emergency history के साथ एक end-to-end emergency workflow में जोड़ता है।',
      },

      algostudio: {
        problem:
          'Static explanations से algorithms सीखते समय data structures और algorithms के step-by-step behavior को समझना कठिन हो सकता है।',
        approach:
          'Algorithm visualizations, animations, step-by-step execution, user interaction और complexity information के साथ एक interactive learning platform बनाया।',
        outcome:
          'Sorting, graph algorithms, pathfinding, trees, stacks और queues के लिए interactive visualizations प्रदान करता है।',
      },

      hiver: {
        problem:
          'Customer support teams को ऐसी reliable automation की आवश्यकता होती है जो customer intent समझ सके और बिना गलत policies या actions invent किए useful responses दे सके।',
        approach:
          'Historical AmazonHelp conversations का उपयोग करके intent classification, response retrieval, grounded generation और conservative human escalation वाला AI customer support agent बनाया।',
        outcome:
          'Trustworthy automated responses तैयार करता है और पर्याप्त context न होने पर cases को human support तक escalate करता है।',
      },

      useranalytics: {
        problem:
          'यह समझने के लिए कि users webpage के साथ कैसे interact करते हैं, events collect करके raw interaction data को useful session-level insights में बदलना आवश्यक है।',
        approach:
          'एक full-stack analytics application बनाया जो page views और clicks track करता है, MongoDB में events store करता है और sessions, user journeys तथा click heatmaps visualize करता है।',
        outcome:
          'Interactive dashboard के माध्यम से session analytics, event timelines, user journeys और click heatmaps प्रदान करता है।',
      },
    },

    blogs: {
      title: 'लिखित लॉग्स',
      latest: 'नवीनतम',
      read: 'पढ़ें',
      minRead: 'मिनट का पाठ',

      scaling: {
        title: 'Socket.IO के साथ Real-Time Emergency Coordination',
        excerpt:
          'Real-time SOS coordination, hospital notifications, ambulance assignment और emergency status updates के architecture को समझना।',
        content:
          'Emergency coordination platform में real-time communication एक महत्वपूर्ण भूमिका निभाता है। Socket.IO का उपयोग करके patients, hospitals और emergency participants के बीच real-time communication स्थापित किया जाता है। Emergency data को MongoDB में persist किया जाता है जबकि socket events important state changes को तुरंत clients तक पहुंचाते हैं।',
      },

      websockets: {
        title: 'Algorithms को Step by Step Visualize करना',
        excerpt:
          'Animation और user interaction के माध्यम से data structures और algorithms को अधिक आसानी से समझने के लिए interactive visualization।',
        content:
          'Algorithm visualization execution के दौरान होने वाले comparisons, swaps, traversals और graph operations को visually समझने में मदद करता है। AlgoStudio sorting, graph traversal, shortest path, minimum spanning tree, pathfinding और basic data structures के लिए interactive learning experience प्रदान करता है।',
      },

      zerotrust: {
        title: 'User Analytics Pipeline बनाना',
        excerpt:
          'Page interactions collect करने, sessions reconstruct करने और raw click events को useful analytics में बदलने का तरीका।',
        content:
          'User Analytics application page views और clicks जैसे events को session information, page URLs, timestamps और click coordinates के साथ collect करता है। MongoDB event data store करता है और dashboard इसे sessions, user journeys और click heatmaps के रूप में visualize करता है।',
      },
    },
  },

  ja: {
    experience: {
      accenture: {
        role: 'アソシエイトソフトウェアエンジニア インターン',
        location: 'バンガロール、カルナータカ',
        date: '2026年5月 - 2026年7月',
        description:
          'Valet Living LLC向けの米国企業アプリケーションの開発に携わり、アプリケーション開発と機能実装に貢献しました。',
        achievements: [
          'Node.js、React.js、SQLを使用したアプリケーション開発に貢献。',
          'エンタープライズアプリケーションのフロントエンドおよびバックエンド機能を開発。',
          '開発チームと協力してアプリケーション機能の実装と改善を行いました。',
        ],
      },
    },

    projects: {
      labels: {
        problem: '課題',
        approach: 'アプローチ',
        infra: 'インフラ & 技術スタック',
        outcome: '成果',
        code: 'ソース',
        live: '見る',
      },

      lifeconnect: {
        problem:
          '緊急時には患者、病院、救急車の迅速な連携が必要ですが、重要な医療リソースをすぐに見つけることは困難です。',
        approach:
          'ワンタップSOS、ロールベースアクセス制御、地理空間検索、リアルタイム通知、救急車連携を備えたフルスタック緊急対応プラットフォームを構築しました。',
        outcome:
          '患者、病院、救急車をリアルタイムのステータス更新と緊急履歴を含むエンドツーエンドのワークフローで接続します。',
      },

      algostudio: {
        problem:
          '静的な説明だけでは、データ構造やアルゴリズムの動作をステップごとに理解することが難しい場合があります。',
        approach:
          'アルゴリズムの可視化、アニメーション、ステップ実行、ユーザー操作、計算量情報を備えたインタラクティブな学習プラットフォームを構築しました。',
        outcome:
          'ソート、グラフアルゴリズム、経路探索、木構造、スタック、キューなどのインタラクティブな可視化を提供します。',
      },

      hiver: {
        problem:
          'カスタマーサポートでは、誤ったポリシーやアクションを生成せず、顧客の意図を正確に理解して回答できる信頼性の高い自動化が必要です。',
        approach:
          'AmazonHelpの過去の会話データを使用し、意図分類、回答検索、グラウンデッド生成、保守的な人間へのエスカレーションを行うAIサポートエージェントを構築しました。',
        outcome:
          '信頼性の高い自動回答を生成し、十分なコンテキストがないケースでは人間のサポートへエスカレーションします。',
      },

      useranalytics: {
        problem:
          'ユーザーのWebページ上での行動を理解するには、イベントを収集し、インタラクションデータをセッション単位の分析情報に変換する必要があります。',
        approach:
          'ページビューとクリックを追跡し、MongoDBにイベントを保存して、セッション、ユーザージャーニー、クリックヒートマップを可視化するフルスタック分析アプリケーションを構築しました。',
        outcome:
          'インタラクティブなダッシュボードでセッション分析、イベントタイムライン、ユーザージャーニー、クリックヒートマップを提供します。',
      },
    },

    blogs: {
      title: '活動ログ',
      latest: '最新',
      read: '読む',
      minRead: '分で読める',

      scaling: {
        title: 'Socket.IOによるリアルタイム緊急対応',
        excerpt:
          'リアルタイムSOS連携、病院通知、救急車割り当て、緊急ステータス更新のアーキテクチャについて。',
        content:
          '緊急対応プラットフォームではリアルタイム通信が重要です。Socket.IOを使用して患者、病院、その他の参加者間でリアルタイム通信を行い、MongoDBに緊急データを保存します。Socketイベントによって重要な状態変更をクライアントへ即座に通知できます。',
      },

      websockets: {
        title: 'アルゴリズムをステップごとに可視化する',
        excerpt:
          'アニメーションとユーザー操作を利用してデータ構造とアルゴリズムを理解しやすくするインタラクティブな可視化。',
        content:
          'アルゴリズムの可視化では、実行中の比較、交換、探索、グラフ操作などを視覚的に確認できます。AlgoStudioでは、ソート、グラフ探索、最短経路、最小全域木、経路探索、基本的なデータ構造をインタラクティブに学習できます。',
      },

      zerotrust: {
        title: 'ユーザー分析パイプラインの構築',
        excerpt:
          'ページ操作の収集、セッションの再構築、クリックイベントから分析情報を生成する方法。',
        content:
          'User Analyticsアプリケーションでは、ページビューやクリックイベントをセッション情報、URL、タイムスタンプ、クリック座標とともに収集します。MongoDBにイベントを保存し、ダッシュボードでセッション、ユーザージャーニー、クリックヒートマップとして可視化します。',
      },
    },
  },
}

// الأسئلة المضمنة
const questions = [
    {
      "question": "Sound waves cannot travel through one of the following:",
      "options": ["Water", "Air", "Metal", "Vacuum"],
      "answer": "Vacuum",
      "explanation": "Sound waves cannot travel in a vacuum, as pressure waves can only be transmitted through physical media consisting of molecules that interact with each other. Water, air, and metal are all such media, and therefore sound waves can and indeed do travel in them."
    },
    {
      "question": "Ultrasound is a pressure wave with a frequency above the audible range of human hearing, which is:",
      "options": ["200 Hz", "2 kHz", "20,000 Hz", "200 kHz"],
      "answer": "20,000 Hz",
      "explanation": "The upper limit of the audible range of human hearing is 20,000 Hz or 20 kHz. There are animals that can hear sounds in different ranges than humans. For example, bats’ hearing includes sounds in a much higher frequency range. This is known as supersonic hearing."
    },
    {
      "question": "The frequency of a sound wave is measured in Hz as the:",
      "options": [
        "Inverse of the wavelength",
        "Maximal amplitude of particle vibration",
        "Number of times particles vibrate each second in the direction perpendicular to wave propagation",
        "Number of times particles vibrate each second in the direction of wave propagation"
      ],
      "answer": "Number of times particles vibrate each second in the direction of wave propagation",
      "explanation": "Frequency in general is measured in Hz (Hertz), which is defined as 1/sec. The frequency of a wave is defined as the number of times a particle in a conducting medium vibrates per unit time. Thus, frequency is the inverse of the period. Since sound waves are pressure disturbances traveling in the medium in the direction of the particle vibrations, they are called longitudinal waves."
    },
    
  {
    "question": "Assuming that sound velocity in muscle tissue is 1,600 m/sec, the wavelength of a sound wave with the frequency of 1.6 MHz is:",
    "options": ["1 mm", "1 cm", "1 m", "0.1 mm"],
    "answer": "1 mm",
    "explanation": "Wavelength is defined as the distance a wave travels during a single cycle. Wavelength can be calculated as the product of velocity (c) and period (T), or as the ratio of velocity to frequency (f): λ = c/f = 1600 m/sec / 1.6 MHz = 1 mm."
  },
  {
    "question": "As an ultrasound wave travels through the human body, the type of tissue that results in the fastest loss of its strength is:",
    "options": ["Fat", "Bone", "Lung", "Blood"],
    "answer": "Lung",
    "explanation": "Due to the high content of air and the abundance of highly reflective tissue/air interfaces, the sound waves dissipate in the lung so fast that the lungs are virtually opaque to ultrasound."
  },
  {
    "question": "The main goal of the gel used during ultrasound imaging is to:",
    "options": [
      "Disinfect the transducer",
      "Cool the transducer",
      "To numb the skin and thus reduce patient's discomfort caused by pressure",
      "To improve the contact between transducer surface and the skin"
    ],
    "answer": "To improve the contact between transducer surface and the skin",
    "explanation": "The gel improves contact between the transducer and the skin by eliminating air gaps, ensuring better transmission of ultrasound waves."
  }

    
  ];
  

function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    // عرض السؤال
    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);

    // عرض الخيارات
    const optionsList = document.createElement('ul');
    optionsList.className = 'options';
    q.options.forEach(option => {
      const optionItem = document.createElement('li');
      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = `question-${index}`;
      optionInput.value = option;
      optionInput.addEventListener('change', () => checkAnswer(index, option));

      const optionLabel = document.createElement('label');
      optionLabel.textContent = option;

      optionItem.appendChild(optionInput);
      optionItem.appendChild(optionLabel);
      optionsList.appendChild(optionItem);
    });
    questionDiv.appendChild(optionsList);

    // مكان عرض النتيجة
    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = `feedback-${index}`;
    questionDiv.appendChild(feedbackDiv);

    quizContainer.appendChild(questionDiv);
  });
}

function checkAnswer(questionIndex, selectedOption) {
    const feedbackDiv = document.getElementById(`feedback-${questionIndex}`);
    const correctAnswer = questions[questionIndex].answer;
    const explanation = questions[questionIndex].explanation;
  
    // التحقق من الإجابة
    if (selectedOption === correctAnswer) {
      feedbackDiv.textContent = `إجابة صحيحة! ${explanation}`;
      feedbackDiv.className = "correct";
    } else {
      feedbackDiv.textContent = `إجابة خاطئة! الإجابة الصحيحة هي: ${correctAnswer}. ${explanation}`;
      feedbackDiv.className = "incorrect";
    }
  }
  

// تحميل الاختبار عند فتح الصفحة
document.addEventListener('DOMContentLoaded', loadQuiz);

document.addEventListener('DOMContentLoaded', function() {
    // Language translations
    const translations = {
        'en': {
            'instruction_initial': 'Please read the instructions carefully before proceeding.',
            'instruction_step1': 'Step 1: Dissolve 100 mg of salicylic acid in 100 ml of distilled water.',
            'instruction_step2': 'Step 2: Mix 8.5 ml concentrated HCl with distilled water to make 100 ml.',
            'instruction_step3': 'Step 3: Prepare 5 test tubes with concentrations ranging from 0.02 mg/ml to 0.10 mg/ml using standard solution.',
            'instruction_step4': 'Step 4: Add ferric chloride to each test tube and observe the color change.',
            'instruction_step5': 'Step 5: Heat the solutions in a water bath and observe the changes.',
            'instruction_step6': 'Step 6: Record the absorbance values and plot a calibration curve.',

            'start': 'Start',
            'next': 'Next'
        },
        'hi': {
            'instruction_initial': 'कृपया आगे बढ़ने से पहले निर्देशों को ध्यान से पढ़ें।',
            'instruction_step1': 'चरण 1: 100 मिलीग्राम सैलिसिलिक एसिड को 100 मिली आसुत जल में घोलें।',
            'instruction_step2': 'चरण 2: 8.5 मिली सांद्र HCl को आसुत जल के साथ मिलाकर 100 मिली बनाएं।',
            'instruction_step3': 'चरण 3: मानक समाधान का उपयोग करके 0.02 मिलीग्राम/मिली से 0.10 मिलीग्राम/मिली तक की सांद्रता वाली 5 परीक्षण नलिकाएँ तैयार करें।',
            'instruction_step4': 'चरण 4: प्रत्येक परीक्षण नलिका में फेरिक क्लोराइड डालें और रंग परिवर्तन का निरीक्षण करें।',
            'instruction_step5': 'चरण 5: समाधानों को वॉटर बाथ में गरम करें और परिवर्तनों का निरीक्षण करें।',
            'instruction_step6': 'चरण 6: अवशोषण मान दर्ज करें और अंशांकन वक्र बनाएं।',

            'start': 'प्रारंभ करें',
            'next': 'अगला'
        }
    };

    // Set default language to English
    let currentLanguage = 'en';

    // Update all text content based on selected language
    function updateLanguage() {
        const lang = translations[currentLanguage];

        // Update instruction text
        document.querySelector('.instruction-text').textContent = lang.instruction_initial;



        // Update navigation buttons
        document.querySelector('.start-btn').textContent = lang.start;
        document.querySelector('.next-btn').textContent = lang.next;
    }

    // Add event listener to language dropdown
    document.querySelector('.language-select select').addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });

    // Initialize with default language (English)
    updateLanguage();

    // Variables to track salicylic acid state
    let salicylicAcidOnScale = false;
    let salicylicAcidWeighed = false;
    let salicylicAcidInFlask = false;

    // Initially hide all apparatus elements
    const apparatusElements = [
        // Step 1 elements
        '.volumetric-flasks',
        '.volumetric-flasks-cap',
        '.salicylic-acid',
        '.distilled-water',
        '.water-1',
        '.drop',
        '.weight-machine',
        '.weight-display',
        '.weight-power-btn',
        '.salicylic-powder',
        '.salicylic_acid_powder',

        // Step 2 elements
        '.measuring-cylinder',
        '.beaker',
        '.hcl',

        // Step 3 elements
        '.standard-salicylic-acid',
        '.pipette',
        '.test-tubes',
        '.test-tubes-rack',

        // Step 4 elements
        '.ferric-chloride',
        '.testtube-rack-dilutions',
        '.colorimeter',
        '.beaker-step4',

        // Step 5 elements
        '.three-tube-rack',
        '.water-bath',
        '.beaker-step5',

        // Step 6 elements
        '.colorimeter-step6',
        '.conical-flask',
        '.heating-mantle'
    ];

    apparatusElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.display = 'none';
        });
    });

    // Hide the next button initially
    document.querySelector('.next-btn').style.display = 'none';



    // Start button functionality
    document.querySelector('.start-btn').addEventListener('click', function() {
        // Hide the start button
        this.style.display = 'none';

        // Show the next button
        document.querySelector('.next-btn').style.display = 'block';

        // Update instruction text to show step 1
        const instructionText = document.querySelector('.instruction-text');
        instructionText.textContent = translations[currentLanguage].instruction_step1 || translations['en'].instruction_step1;

        // Define the objects to show with animation
        const objectsToShow = [
            {
                selector: '.volumetric-flasks',
                delay: 100
            },
            {
                selector: '.volumetric-flasks-cap',
                delay: 100
            },
            {
                selector: '.salicylic-acid',
                delay: 100
            },
            {
                selector: '.weight-machine',
                delay: 100
            },
            {
                selector: '.weight-power-btn',
                delay: 100
            },
            {
                selector: '.distilled-water',
                delay: 100
            }
        ];

        // Add a variable to track if we've added the click event to the acid image
        let acidImageClickAdded = false;

        // Show each object with animation after its delay
        objectsToShow.forEach(obj => {
            setTimeout(() => {
                const element = document.querySelector(obj.selector);
                if (element) {
                    element.style.display = 'block';
                    element.style.opacity = '0';

                    // Add click event to the salicylic acid image
                    if (obj.selector === '.salicylic-acid' && !acidImageClickAdded) {
                        element.style.cursor = 'pointer'; // Change cursor to indicate it's clickable
                        let clickCount = 0;
                        element.addEventListener('click', function() {
                            clickCount++;

                            if (clickCount === 1) {
                                // First click: Move to weight machine
                                element.style.transition = 'all 2s ease-in-out';
                                element.style.left = '22%';
                                element.style.bottom = '18%';
                                element.style.transform = 'translate(-50%, -50%) scale(0.8)';

                                // Update weight display after 2.5 seconds if machine is on
                                const weightDisplay = document.querySelector('.weight-display');
                                const weightBtn = document.querySelector('.weight-power-btn');
                                if (weightBtn && weightBtn.classList.contains('on') && weightDisplay) {
                                    setTimeout(() => {
                                        weightDisplay.textContent = '100.0 ';
                                    }, 2500);
                                }
                            } else if (clickCount === 2) {
                                // Second click: First lift up, then move right

                                // Step 1: Lift up by 1000px
                                element.style.transition = 'all 1s ease-in-out';
                                element.style.transform = 'translate(-50%, -50%) scale(0.8) translateY(-1000px)';

                                // Step 2: Move to volumetric flask head and tilt 50 degrees
                                setTimeout(() => {
                                    element.style.transition = 'all 2s ease-in-out';
                                    element.style.left = 'calc(62% - 530px)';
                                    element.style.top = '1620px';
                                    element.style.bottom = 'auto';
                                    element.style.transform = 'translate(-50%, -50%) scale(0.8) rotate(50deg)';

                                    // Show falling powder after acid reaches flask
                                    setTimeout(() => {
                                        const powderElements = document.querySelectorAll('.salicylic_acid_powder');
                                        powderElements.forEach((powder, index) => {
                                            setTimeout(() => {
                                                powder.style.display = 'block';
                                                powder.classList.add('falling');

                                                // Hide powder after animation
                                                setTimeout(() => {
                                                    powder.style.display = 'none';
                                                    powder.classList.remove('falling');
                                                }, 1500);
                                            }, index * 200);
                                        });

                                        // Show sample powder in flask after falling animation
                                        setTimeout(() => {
                                            const samplePowder = document.querySelector('.salicylic-powder');
                                            if (samplePowder) {
                                                samplePowder.style.display = 'block';
                                                samplePowder.style.opacity = '1';
                                            }
                                        }, 2000);
                                    }, 1000);
                                }, 1000);

                                // Reset weight display to 00.0 mg after acid is removed
                                const weightDisplay = document.querySelector('.weight-display');
                                const weightBtn = document.querySelector('.weight-power-btn');
                                if (weightBtn && weightBtn.classList.contains('on') && weightDisplay) {
                                    setTimeout(() => {
                                        weightDisplay.textContent = '00.0 ';
                                    }, 500);
                                }
                            }
                        });
                        acidImageClickAdded = true;
                    }

                    // Add click event to the distilled water
                    if (obj.selector === '.distilled-water') {
                        element.style.cursor = 'pointer';
                        element.addEventListener('click', distilledWater);
                    }

                    // Fade in animation
                    setTimeout(() => {
                        element.style.transition = 'opacity 0.5s ease-in-out';
                        element.style.opacity = '1';
                    }, 50);
                }
            }, obj.delay);
        });



            // Add click event to the weight machine power button
            const weightPowerBtn = document.querySelector('.weight-power-btn');
            if (weightPowerBtn) {
                weightPowerBtn.addEventListener('click', function() {
                    // Toggle the power button state
                    this.classList.toggle('on');

                    // Get the weight display
                    const weightDisplay = document.querySelector('.weight-display');

                    if (this.classList.contains('on')) {
                        // Turn on the weight machine - display is initially blank
                        weightDisplay.style.display = 'block';

                        // Fade in animation
                        setTimeout(() => {
                            weightDisplay.style.opacity = '1';

                            // Display is blank initially or shows 100.0 mg if salicylic acid is on the scale
                            if (salicylicAcidOnScale) {
                                weightDisplay.textContent = '100.0 ';
                            } else {
                                weightDisplay.textContent = '00.0 ';
                            }

                            // Show a message that the weight machine is on
                            const instructionText = document.querySelector('.instruction-text');
                            const originalText = instructionText.textContent;

                            const weightOnMessages = {
                                'en': 'Weight machine is now on. Next, click on the salicylic acid to place it on the scale.',
                                'hi': 'वजन मशीन अब चालू है। अब, सैलिसिलिक एसिड पर क्लिक करके इसे तराजू पर रखें।'
                            };

                            instructionText.textContent = weightOnMessages[currentLanguage] || weightOnMessages['en'];

                            // Reset the instruction text after 5 seconds
                            setTimeout(() => {
                                instructionText.textContent = originalText;
                            }, 5000);
                        }, 50);
                    } else {
                        // Turn off the weight machine - display stays visible but dims
                        weightDisplay.style.opacity = '0.3';

                        // Show a message that the weight machine is off
                        const instructionText = document.querySelector('.instruction-text');
                        const originalText = instructionText.textContent;

                        const weightOffMessages = {
                            'en': 'Weight machine is now off.',
                            'hi': 'वजन मशीन अब बंद है।'
                        };

                        instructionText.textContent = weightOffMessages[currentLanguage] || weightOffMessages['en'];

                        // Reset the instruction text after 3 seconds
                        setTimeout(() => {
                            instructionText.textContent = originalText;
                        }, 3000);
                    }
                });
            }
        }, 2000); // Enable buttons after all objects are shown
    });

    // Variable to track current step
    let currentStep = 1;

    // Function to hide all elements from a specific step
    function hideStepElements(stepNumber) {
        let elementsToHide = [];

        // Define elements to hide for each step
        switch(stepNumber) {
            case 1:
                elementsToHide = [
                    '.volumetric-flasks',
                    '.volumetric-flasks-cap',
                    '.weight-machine',
                    '.weight-display',
                    '.weight-power-btn',
                    '.salicylic-acid',
                    '.salicylic-powder',
                    '.salicylic_acid_powder',
                    '.water-1',
                    '.drop'
                ];
                break;
            case 2:
                elementsToHide = [
                    '.measuring-cylinder',
                    '.beaker',
                    '.distilled-water',
                    '.hcl'
                ];
                break;
            case 3:
                elementsToHide = [
                    '.standard-salicylic-acid',
                    '.pipette',
                    '.test-tubes',
                    '.test-tubes-rack',
                    '.distilled-water',
                    '.drop'
                ];
                break;
            case 4:
                elementsToHide = [
                    '.ferric-chloride',
                    '.testtube-rack-dilutions',
                    '.colorimeter',
                    '.beaker-step4'
                ];
                break;
            case 5:
                elementsToHide = [
                    '.three-tube-rack',
                    '.water-bath',
                    '.beaker-step5'
                ];
                break;
            case 6:
                elementsToHide = [
                    '.colorimeter-step6',
                    '.conical-flask',
                    '.heating-mantle'
                ];
                break;
            default:
                break;
        }

        // Hide each element with a fade-out animation
        elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element) {
                    element.style.opacity = '0';
                    setTimeout(() => {
                        element.style.display = 'none';
                    }, 500);
                }
            });
        });


    }

    // Next button functionality
    document.querySelector('.next-btn').addEventListener('click', function() {
        // Hide elements from current step
        hideStepElements(currentStep);

        // Increment the current step
        currentStep++;

        // Get the instruction text element
        const instructionText = document.querySelector('.instruction-text');

        // Show the appropriate step content based on currentStep
        if (currentStep <= 6) {
            // Update instruction text for the current step
            instructionText.textContent = translations[currentLanguage][`instruction_step${currentStep}`] ||
                                         translations['en'][`instruction_step${currentStep}`];

            // Show the appropriate elements for the current step
            showStepElements(currentStep);
        } else {
            // We're at the end of the experiment
            // Show completion message
            const completionMessages = {
                'en': 'Experiment completed successfully!',
                'hi': 'प्रयोग सफलतापूर्वक पूरा हुआ!'
            };

            instructionText.textContent = completionMessages[currentLanguage] || completionMessages['en'];

            // Hide the next button
            this.style.display = 'none';
        }
    });

    // Function to show elements for a specific step
    function showStepElements(stepNumber) {
        let elementsToShow = [];

        // Define elements to show for each step
        switch(stepNumber) {
            case 1:
                elementsToShow = [
                    {selector: '.volumetric-flasks', delay: 100},
                    {selector: '.volumetric-flasks-cap', delay: 300},
                    {selector: '.salicylic-acid', delay: 500},
                    {selector: '.weight-machine', delay: 700},
                    {selector: '.weight-power-btn', delay: 900},
                    {selector: '.distilled-water', delay: 1100}
                ];
                break;
            case 2:
                elementsToShow = [
                    {selector: '.measuring-cylinder', delay: 100},
                    {selector: '.beaker', delay: 300},
                    {selector: '.hcl', delay: 500},
                    {selector: '.distilled-water', delay: 700}
                ];
                break;
            case 3:
                elementsToShow = [
                    {selector: '.standard-salicylic-acid', delay: 100},
                    {selector: '.pipette', delay: 300},
                    {selector: '.test-tubes', delay: 500},
                    {selector: '.test-tubes-rack', delay: 700},
                    {selector: '.distilled-water', delay: 900}
                ];
                break;
            case 4:
                elementsToShow = [
                    {selector: '.ferric-chloride', delay: 100},
                    {selector: '.testtube-rack-dilutions', delay: 300},
                    {selector: '.colorimeter', delay: 500},
                    {selector: '.beaker-step4', delay: 700}
                ];
                break;
            case 5:
                elementsToShow = [
                    {selector: '.three-tube-rack', delay: 100},
                    {selector: '.water-bath', delay: 300},
                    {selector: '.beaker-step5', delay: 500}
                ];
                break;
            case 6:
                elementsToShow = [
                    {selector: '.colorimeter-step6', delay: 100},
                    {selector: '.conical-flask', delay: 300},
                    {selector: '.heating-mantle', delay: 500}
                ];
                break;
            default:
                break;
        }

        // Show each element with animation
        elementsToShow.forEach(obj => {
            setTimeout(() => {
                const element = document.querySelector(obj.selector);
                if (element) {
                    element.style.display = 'block';
                    element.style.opacity = '0';

                    // Fade in animation
                    setTimeout(() => {
                        element.style.transition = 'opacity 0.5s ease-in-out';
                        element.style.opacity = '1';
                    }, 50);
                } else {
                    console.log(`Element not found: ${obj.selector}`);
                }
            }, obj.delay);
        });


    }



    // Function to handle distilled water bottle click
    function handleDistilledWaterClick() {
        // Only proceed if the flask is visible
        const flaskElement = document.querySelector('.volumetric-flasks');
        if (flaskElement.style.display === 'block') {
            // Get the water element and drops
            const waterElement = document.querySelector('.water-1');
            const drops = document.querySelectorAll('.water-drop');

            console.log("Water element:", waterElement); // Debug log
            console.log("Drops:", drops.length); // Debug log

            // Make sure the water element exists
            if (!waterElement) {
                console.error("Water element not found!");
                return;
            }

            // Start the animation sequence
            // 1. Show and animate the drops falling
            if (drops.length > 0) {
                drops.forEach((drop, index) => {
                    setTimeout(() => {
                        // Make sure the drop is visible
                        drop.style.display = 'block';
                        drop.style.opacity = '1';

                        // Add the falling animation class
                        drop.classList.add('falling');

                        // Remove the animation class after it completes
                        setTimeout(() => {
                            drop.classList.remove('falling');
                            drop.style.opacity = '0';
                            drop.style.display = 'none';

                            // If this is the last drop, show the water_1-01 image
                            if (index === drops.length - 1) {
                                // Show the water in the flask with a fade-in effect
                                setTimeout(() => {
                                    console.log("Showing water element"); // Debug log
                                    waterElement.style.display = 'block';
                                    setTimeout(() => {
                                        waterElement.style.opacity = '1';

                                        // Show a message that water has been added
                                        const instructionText = document.querySelector('.instruction-text');
                                        const originalText = instructionText.textContent;

                                        // Create water added message in the current language
                                        const waterAddedMessages = {
                                            'en': 'Distilled water has been added to the flask.',
                                            'hi': 'आसुत जल फ्लास्क में डाला गया है।'
                                        };

                                        instructionText.textContent = waterAddedMessages[currentLanguage] || waterAddedMessages['en'];

                                        // Reset the instruction text after 3 seconds
                                        setTimeout(() => {
                                            instructionText.textContent = originalText;
                                        }, 3000);
                                    }, 100);
                                }, 200); // Small delay after the last drop animation completes
                            }
                        }, 1500); // Match the animation duration
                    }, index * 300); // Stagger the drops
                });
            } else {
                // If no drops are found, still show the water element
                console.log("No drops found, showing water directly"); // Debug log
                setTimeout(() => {
                    waterElement.style.display = 'block';
                    setTimeout(() => {
                        waterElement.style.opacity = '1';

                        // Show a message that water has been added
                        const instructionText = document.querySelector('.instruction-text');
                        const originalText = instructionText.textContent;

                        // Create water added message in the current language
                        const waterAddedMessages = {
                            'en': 'Distilled water has been added to the flask.',
                            'hi': 'आसुत जल फ्लास्क में डाला गया है।'
                        };

                        instructionText.textContent = waterAddedMessages[currentLanguage] || waterAddedMessages['en'];

                        // Reset the instruction text after 3 seconds
                        setTimeout(() => {
                            instructionText.textContent = originalText;
                        }, 3000);
                    }, 100);
                }, 500);
            }
        } else {
            // If the flask is not visible, show a message
            const instructionText = document.querySelector('.instruction-text');
            const originalText = instructionText.textContent;

            const flaskNeededMessages = {
                'en': 'Please place the volumetric flask first.',
                'hi': 'कृपया पहले आयतनमापी फ्लास्क रखें।'
            };

            instructionText.textContent = flaskNeededMessages[currentLanguage] || flaskNeededMessages['en'];

            // Reset the instruction text after 3 seconds
            setTimeout(() => {
                instructionText.textContent = originalText;
            }, 3000);
        }
    }

    // Function to handle salicylic acid click
    function handleSalicylicAcidClick() {
        // Only proceed if the weight machine is visible
        const weightMachine = document.querySelector('.weight-machine');
        const weightPowerBtn = document.querySelector('.weight-power-btn');
        const weightDisplay = document.querySelector('.weight-display');
        const salicylicAcidElement = document.querySelector('.salicylic-acid');

        console.log("Salicylic acid clicked");
        
        // Check if the acid is already on scale
        if (!salicylicAcidOnScale) {
            console.log("Starting animation");
            
            // Target position (center of the weight machine)
            const endLeft = 28; // Target horizontal position (percentage)
            const endBottom = 15; // Target vertical position (percentage)
            
            // Create a timeline for sequential animation
            const tl = gsap.timeline({
                onComplete: function() {
                    salicylicAcidElement.classList.add('on-scale');
                    salicylicAcidOnScale = true;
                    
                    // Update weight display
                    if (weightPowerBtn.classList.contains('on')) {
                        weightDisplay.textContent = '100.0 ';
                    }
                    
                    // Show completion message
                    const instructionText = document.querySelector('.instruction-text');
                    const completionMessages = {
                        'en': 'Salicylic acid has been placed on the scale. Weight: 100.0 mg.',
                        'hi': 'सैलिसिलिक एसिड को तराजू पर रखा गया है। वजन: 100.0 मिलीग्राम।'
                    };
                    instructionText.textContent = completionMessages[currentLanguage] || completionMessages['en'];
                }
            });
            
            // STEP 1: First lift up (move upward)
            tl.to(salicylicAcidElement, {
                duration: 1.0,  // Duration in seconds
                top: "+=100px",    // Move up by 100px
                scale: 0.9,     // Slightly reduce size during lift
                ease: "power2.out",
                transformOrigin: "center bottom"
            })
            
            // STEP 2: Then move right (to the weight machine)
            .to(salicylicAcidElement, {
                duration: 1.2,
                left: endLeft + "%",  // Move to target position
                bottom: endBottom + "%", // Move to target position
                scale: 0.8,
                ease: "power3.inOut",
                transformOrigin: "center bottom"
            })
            
            // STEP 3: Settle down with a slight bounce
            .to(salicylicAcidElement, {
                duration: 0.4,
                y: "+=10px",
                scale: 0.75,
                ease: "elastic.out(1, 0.3)",
                transformOrigin: "center bottom"
            });
            
            // Add subtle rotation during movement for realism
            tl.to(salicylicAcidElement, {
                rotation: -5,
                duration: 0.4,
                ease: "power1.inOut"
            }, 0.3)
            .to(salicylicAcidElement, {
                rotation: 3,
                duration: 0.5,
                ease: "power1.inOut"
            }, 1.0)
            .to(salicylicAcidElement, {
                rotation: 0,
                duration: 0.4,
                ease: "power1.out"
            }, 1.8);
        } else {
            console.log("Acid already on scale");
        }
    }

    // Function to animate the distilled water bottle when clicked
    function distilledWater() {
    const distilledWaterElement = document.querySelector('.distilled-water');

    // Only proceed if the element exists
    if (distilledWaterElement) {
        // Create a GSAP timeline for the animation
        const tl = gsap.timeline({
            onComplete: function() {
                // After the animation completes, animate water drops falling
                animateWaterDrops();
            }
        });

        // Add animations to the timeline
        tl.to(distilledWaterElement, {
            duration: 0.5,  // Duration in seconds
            y: "-550px",     // Lift up a little
            x: "550px",      // Shift to the right
            ease: "power2.out"  // Smooth acceleration
        })
        .to(distilledWaterElement, {
            duration: 0.8,   // Duration for rotation
            rotation: -60,    // Rotate 60 degrees to the left
            transformOrigin: "bottom center", // Rotate from bottom center
            ease: "power2.inOut"  // Smooth acceleration and deceleration
        })
        .to(distilledWaterElement, {
            duration: 1.5,   // Hold this position longer for pouring
            scale: 1,        // Maintain scale
            ease: "none"     // No easing
        })
        .to(distilledWaterElement, {
            duration: 0.8,   // Duration to return to original position
            y: "0",          // Return to original vertical position
            x: "0",          // Return to original horizontal position
            rotation: 0,     // Return to original rotation
            ease: "power2.inOut"  // Smooth acceleration and deceleration
        });
    }
    }

    // Function to animate water drops falling from the bottle
    function animateWaterDrops() {
    const bottle = document.querySelector('.distilled-water');
    const bottleRect = bottle.getBoundingClientRect();

    // Calculate the position of the nib when bottle is tilted
    const nibX = bottleRect.left + bottleRect.width * 0.4;
    const nibY = bottleRect.top + bottleRect.height * 0.4;

    // Create and animate multiple drops
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createWaterDrop(nibX, nibY);
        }, i * 300); // Stagger the drops
    }

    // After drops finish, call the original water handling function
    setTimeout(() => {
        handleDistilledWaterClick();
    }, 1800); // Delay to ensure bottle animation completes first
    }

    // Function to create a single water drop
    function createWaterDrop(x, y) {
    // Create a new drop element
    const drop = document.createElement('div');
    drop.className = 'water-drop';

    // Position the drop at the nib of the bottle
    drop.style.left = `${x}px`;
    drop.style.top = `${y}px`;

    // Add the drop to the document
    document.body.appendChild(drop);

    // Make the drop visible and start animation
    setTimeout(() => {
        drop.classList.add('falling');

        // Remove the drop after animation completes
        setTimeout(() => {
            document.body.removeChild(drop);
        }, 1500);
    }, 10);
    }

    // Add event delegation to handle clicks on measuring cylinder even if it's added later
    document.body.addEventListener('click', function(event) {
    if (event.target.matches('.measuring-cylinder')) {
        const cylinder = event.target;

        // Add the animation class
        cylinder.classList.add('animating');

        // Remove the animation class after it completes
        setTimeout(() => {
            cylinder.classList.remove('animating');
        }, 2100); // Match the animation duration

        console.log('Measuring cylinder clicked, animation applied');
    }
    });

    // Also define the function for onclick attribute
    window.measuringCylinder = function() {
    const cylinder = document.querySelector('.measuring-cylinder');
    if (cylinder) {
        cylinder.classList.add('animating');
        setTimeout(() => {
            cylinder.classList.remove('animating');
        }, 2100);
        console.log('measuringCylinder function called');
    } else {
        console.log('Measuring cylinder element not found');
    }
    };

    // Make functions globally accessible
    window.handleSalicylicAcidClick = handleSalicylicAcidClick;
    window.distilledWater = distilledWater;

var maxLength = 9;
            var otpLength = 5;
            var OTPValue = '';
            var getRandomNumber = () => {
                var randomNumber = Math.random() * maxLength;
                randomNumber = Math.floor(randomNumber);
                OTPValue += randomNumber;
                if (OTPValue.length < otpLength) {
                    getRandomNumber();
                } else {
                    document.querySelector(".otpBlock").innerHTML = OTPValue;
                    OTPValue = '';
                }
            }
function showInfo() {
    const buttonH = document.querySelector(".login__submit");

    if (buttonH) {
        buttonH.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default form submission

            const loginFields = document.querySelectorAll(".login__field");
            let isFormValid = true;

            loginFields.forEach(field => {
                const input = field.querySelector(".login__input");

                if (input) {
                    const placeholder = input.placeholder;

                    if (placeholder === "Họ và tên") {
                        if (!/^[a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]+$/u.test(input.value)) {
                            alert(`Invalid ${placeholder}: Please enter a valid name with only letters`);
                            isFormValid = false;
                        } else {
                            console.log(`${placeholder}: ${input.value}`);
                        }
                    } else if (placeholder === "Tuổi") {
                        const age = parseInt(input.value, 10);

                        if (isNaN(age) || age < 13 || age > 99) {
                            alert(`Invalid ${placeholder}: Please enter a valid age between 13 and 99`)
                            isFormValid = false;
                        } else {
                            console.log(`${placeholder}: ${input.value}`);
                        }
                    } else if (placeholder === "Số điện thoại") {
                        const phoneNumber = input.value.trim();

                        if (!/^\d{9,10}$/.test(phoneNumber)) {
                            alert(`Invalid ${placeholder}: Please enter a valid phone number with 9-10 digits`)
                            isFormValid = false;
                        } else {
                            console.log(`${placeholder}: ${input.value}`);
                            alert(`Đăng nhập thành công`)
                            function newDoc() {
                                window.location.assign("https://crepmc.github.io/Nhan-SPCK.io/")
                            }
                            newDoc()
                        }
                    }
                }
            });

            if (isFormValid) {
                // Proceed with further actions (e.g., submitting the form)
                console.log("Form is valid. Proceed with submission.");
            }
        });
    }
}

showInfo();
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

                    if (placeholder === "Tên tài khoản") {
                        if (!/^[a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ1234567890]+$/u.test(input.value)) {
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
                        }
                    } else if (placeholder === "Mật khẩu") {
                        if (!/^[a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ1234567890-_@]+$/u.test(input.value)) {
                            alert(`Invalid ${placeholder}: Please enter a pasword have letter, number and symboy _-&`);
                            isFormValid = false;
                        } else {
                            console.log(`${placeholder}: ${input.value}`);
                        }
                    } else if (placeholder === "Nhập lại mật khẩu") {
                        const passwordInput = document.querySelector('[placeholder="Mật khẩu"]');
                        if (input.value !== passwordInput.value) {
                            alert("Mật khẩu nhập lại không khớp với mật khẩu ban đầu.");
                            isFormValid = false;
                        } else {
                            console.log(`${placeholder}: ${input.value}`);
                        }
                    }
                }
            });

            if (isFormValid) {
                // Proceed with further actions (e.g., submitting the form)
                console.log("Form is valid. Proceed with submission.");
                alert(`Đăng ký thành công`)
                function newDoc() {
                    window.location.assign("https://crepmc.github.io/Nhan-SPCK.io/")
                }
                newDoc()
            }
        });
    }
}

showInfo();
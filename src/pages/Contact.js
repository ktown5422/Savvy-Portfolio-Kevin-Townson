export default function Contact(){
    return `
    <div class="container">
                <h1>Get in Touch</h1>
                <form action="https://formspree.io/ktown5422@gmail.com" method="POST">
                    <label for="">First Name</label>
                    <input type="text" name="fname" id="fname" required>

                    <label for="">Last Name</label>
                    <input type="text" name="lname" id="lname" required>
                    
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required>
                    
                    <label for="phone">Phone</label>
                    <input type="tel" name="phone" id="phone">

                    <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Please enter your message here"></textarea>

                    <input type="submit" value="Submit">
                    <input type="reset" value="Clear">
                </form>
        </div>
    `;
}
## Create a Payment Page as per the Provided Design

**Description:**
Create a webpage using ReactJS components that matches the provided design. The page should include a selection functionality that updates the price and discounted price based on the selected plan.

**Assumption:**
Due to a lack of clarity regarding the calculation, the following assumptions have been made:

- The Subscription Fee is fixed at Rs 18,500.
- If the subscription is purchased before March 25th, 2023, a discount of Rs 18,401 is applied.
- The discount is no longer applicable.
- For a 12-month plan at Rs 15/month, the total amount to be paid is Rs 18,500 + Rs 179 = Rs 18,679.
- For a 6-month plan at Rs 25/month, the total amount to be paid is Rs 18,500 + Rs 149 = Rs 18,649.
- For a 3-month plan at Rs 33/month, the total amount to be paid is Rs 18,500 + Rs 99 = Rs 18,599.

If the offer date is on or before March 25th:

- For a 12-month plan at Rs 15/month, the discounted amount to be paid is Rs 18,500 - Rs 18,401 + Rs 179 = Rs 278.
- For a 6-month plan at Rs 25/month, the discounted amount to be paid is Rs 18,500 - Rs 18,401 + Rs 149 = Rs 248.
- For a 3-month plan at Rs 33/month, the discounted amount to be paid is Rs 18,500 - Rs 18,401 + Rs 99 = Rs 198.

**Pre-requisites:**
- Install the required node modules (Command: `npm install`)
- To run the application, use the following command: `npm start`

**End:**
Thank you for considering my implementation for the assigned project. I have created the payment page as per the provided design using ReactJS components. If you have any further questions or need assistance, please feel free to reach out. I look forward to your feedback and the opportunity to enhance your user experience.

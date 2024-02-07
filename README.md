# YouTube Access Control for Kids

## Disclaimer

This website and its accompanying application have been developed with the sole intention of creating a safer online environment for children. It is not designed to collect any personal information, scam, or deceive users in any way. The source code and functionality are transparent and can be reviewed upon request to ensure trust and safety.

## Introduction

In an effort to manage and supervise the online activities of younger family members, specifically their access to YouTube, I've developed a simple yet effective solution. Recognizing the challenge parents and guardians face in preventing children from accessing potentially inappropriate content on YouTube, this project aims to add an extra layer of oversight.

## How It Works

The solution comprises two main components: a website and a standalone Windows application (.exe file). Here's a breakdown of their functionalities:

### The Website

- **Purpose**: Serves as the initial gateway to YouTube, replacing direct access to the site.
- **Functionality**: Upon visiting the website, users are prompted with a simple math question. This acts as a basic verification step to gauge the user's maturity and intention.
  - **Correct Answer**: If the user answers the math question correctly, they are redirected to YouTube, allowing them access to its content.
  - **Incorrect Answers**: If the user answers incorrectly twice, they are redirected to YouTube Kids instead, ensuring they are presented with age-appropriate content.

### The Application

- **Purpose**: Provides an optional tool for guardians to further manage access to YouTube.
- **Functionality**: When executed, the application redirects users to the custom website (described above) instead of allowing direct access to YouTube. This ensures that every attempt to visit YouTube is screened through the verification process.
- **Startup Integration**: For convenience and to ensure the application runs automatically on a computer used by children, instructions are provided for adding the application to the Windows Startup folder. This means the access control measures are in place every time the computer is turned on, without requiring manual activation.

### Safety and Transparency

- **Open for Inspection**: The website and the application are designed with transparency and safety in mind. Guardians are encouraged to inspect the mechanisms of both tools to verify their integrity and the absence of any malicious intent.
- **Solving a Common Concern**: This project is born out of a genuine need to protect younger internet users from potentially harmful content on YouTube. It offers a simple, yet effective, method of restricting access based on a user's ability to answer a basic math question.

## Setup Instructions

1. **Download the Application**: Visit the website to download the standalone application. The link to the `.exe` file is prominently displayed. (You can also download it here: [https://github.com/kadench/youtube_redirect/raw/main/youtube_redirector.exe](https://github.com/kadench/youtube_redirect/raw/main/youtube_redirector.exe)
2. **Place in Startup Folder**: To ensure the application runs at every system start, press `Win + R` to open the Run dialog, type `shell:startup`, and press Enter. Then, place a shortcut to the downloaded `.exe` file in the Startup folder.
3. **Use the Website**: Set the website as the home page on your web browsers, or use it as the only allowed method of accessing YouTube on the computers used by your children.

## Conclusion

This initiative is a personal project designed to aid in the responsible supervision of children's internet use. It's a proactive step towards mitigating the risks associated with unsupervised access to online content, particularly on platforms as vast and varied as YouTube. Your feedback and suggestions for improvements are always welcome, as this project is part of an ongoing effort to ensure a safer online experience for our younger internet users.

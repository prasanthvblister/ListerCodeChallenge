const util = require("../functions");
describe("Scenarios to remove blank space from a given string", () => {
    it("Verify whether leading or trailing space is removed if available for the given string", () => {
      let result = util.removeBlankSpace('     Blankspace        ');
      expect(result).toBe('Blankspace')
    });
  
    it("Verify whether single space is removed from a given string ", () => {
      let result = util.removeBlankSpace('Find Blank Spaces');
      expect(result).toBe('FindBlankSpaces')
    });
  
    it("Verify whether all spaces are removed from a given string", () => {
      let result = util.removeBlankSpace('Find    extraspace');
      expect(result).toBe('Findextraspace')
    });

    it("Verify whether the given string is undefined", () => {
      let result = util.removeBlankSpace();
      expect(result).toBe('')
    });
  });
describe("Scenarios to verify the string is palindrome or not ", () => {
    it("Verify that the given string is not empty", () => {
        let result = util.checkpalindrome('testEmpty');
        expect(result).toBeFalsy();
      });
      
      it("Verify that the given string is empty", () => {
        let result = util.checkpalindrome('');
        expect(result).toBeFalsy();
      });

      it("Verify that the given string is undefined", () => {
        let result = util.checkpalindrome();
        expect(result).toBeFalsy();
      });
    
      it("Verify whether the given alpha numeric is a palindrome", () => {
        let result = util.checkpalindrome('Tes110ter');
        expect(result).toBeFalsy();
      });
    
      it("Verify whether the string with special characters is a palindrome", () => {
        let result = util.checkpalindrome('m@s@m', true);
        expect(result).toBeTruthy();
      });
    
      it("Verify whether the given number is a palindrome", () => {
        let result = util.checkpalindrome('12321');
        expect(result).toBeTruthy();
      });

      it("Verify whether the given number is not a palindrome", () => {
        let result = util.checkpalindrome('245376');
        expect(result).toBeFalsy();
      });

      it("Verify that the given string is a palindrome", () => {
        let result = util.checkpalindrome('malayalam', true);
        expect(result).toBeTruthy();
      });

      it("Verify that the given string with casesensitive is a palindrome", () => {
        let result = util.checkpalindrome('MalaYalaM', true);
        expect(result).toBeTruthy();
      });
    
      it("Verify  whether the string with punctuation is a palindrome", () => {
        let result = util.checkpalindrome("Its Dell's Laptop");
        expect(result).toBeFalsy();
      });
    });
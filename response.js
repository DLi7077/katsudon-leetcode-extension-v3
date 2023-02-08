const res = {
  status_code: 10,
  lang: "cpp",
  run_success: true,
  status_runtime: "8 ms",
  memory: 10872000,
  question_id: "1",
  elapsed_time: 21,
  compare_result: "111111111111111111111111111111111111111111111111111111111",
  code_output: "",
  std_output: "",
  last_testcase: "",
  expected_output: "",
  task_finish_time: 1675138317367,
  total_correct: 57,
  total_testcases: 57,
  runtime_percentile: 95.75340000000001,
  status_memory: "10.9 MB",
  memory_percentile: 41.14740000000002,
  pretty_lang: "C++",
  submission_id: "888514284",
  status_msg: "Accepted",
  state: "SUCCESS",
};

const err = {
  status_code: 20,
  lang: "cpp",
  run_success: false,
  compile_error: "Line 17: Char 3: error: unknown type name 's'",
  full_compile_error:
    "Line 17: Char 3: error: unknown type name 's'\n};s\n  ^\n1 error generated.",
  status_runtime: "N/A",
  memory: 0,
  question_id: "1",
  task_finish_time: 1675138603489,
  elapsed_time: 0,
  total_correct: null,
  total_testcases: null,
  runtime_percentile: null,
  status_memory: "N/A",
  memory_percentile: null,
  pretty_lang: "C++",
  submission_id: "888516351",
  status_msg: "Compile Error",
  state: "SUCCESS",
};

const solutionLanguage = res.lang;
const solutionCode = res.expected_lang;

const fetchUrl =
  "https://leetcode.com/submissions/detail/runcode_1675136932.7746737_1vMCA8TmMf/check/";

const endsWith_check_ = new RegExp("check/$");
const contains_runcode_ = new RegExp("runcode");

console.log(
  endsWith_check_.test(fetchUrl) && !contains_runcode_.test(fetchUrl)
);

// GraphQL queries
const problemDetails = {
  data: {
    question: {
      questionId: "1",
      questionFrontendId: "1",
      title: "Two Sum",
      titleSlug: "two-sum",
      isPaidOnly: false,
      difficulty: "Easy",
      likes: 42784,
      dislikes: 1399,
    },
  },
};

const problemDescription = {
  data: {
    question: {
      content:
        '<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,11,15], target = 9\n<strong>Output:</strong> [0,1]\n<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n</pre>\n\n<p><strong class="example">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,4], target = 6\n<strong>Output:</strong> [1,2]\n</pre>\n\n<p><strong class="example">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3], target = 6\n<strong>Output:</strong> [0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n\t<li><strong>Only one valid answer exists.</strong></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?',
      mysqlSchemas: [],
    },
  },
};

const details = {
  questionId: "1580",
  questionFrontendId: "1470",
  boundTopicId: null,
  title: "Shuffle the Array",
  titleSlug: "shuffle-the-array",
  content:
    '<p>Given the array <code>nums</code> consisting of <code>2n</code> elements in the form <code>[x<sub>1</sub>,x<sub>2</sub>,...,x<sub>n</sub>,y<sub>1</sub>,y<sub>2</sub>,...,y<sub>n</sub>]</code>.</p>\r\n\r\n<p><em>Return the array in the form</em> <code>[x<sub>1</sub>,y<sub>1</sub>,x<sub>2</sub>,y<sub>2</sub>,...,x<sub>n</sub>,y<sub>n</sub>]</code>.</p>\r\n\r\n<p>&nbsp;</p>\r\n<p><strong class="example">Example 1:</strong></p>\r\n\r\n<pre>\r\n<strong>Input:</strong> nums = [2,5,1,3,4,7], n = 3\r\n<strong>Output:</strong> [2,3,5,4,1,7] \r\n<strong>Explanation:</strong> Since x<sub>1</sub>=2, x<sub>2</sub>=5, x<sub>3</sub>=1, y<sub>1</sub>=3, y<sub>2</sub>=4, y<sub>3</sub>=7 then the answer is [2,3,5,4,1,7].\r\n</pre>\r\n\r\n<p><strong class="example">Example 2:</strong></p>\r\n\r\n<pre>\r\n<strong>Input:</strong> nums = [1,2,3,4,4,3,2,1], n = 4\r\n<strong>Output:</strong> [1,4,2,3,3,2,4,1]\r\n</pre>\r\n\r\n<p><strong class="example">Example 3:</strong></p>\r\n\r\n<pre>\r\n<strong>Input:</strong> nums = [1,1,2,2], n = 2\r\n<strong>Output:</strong> [1,2,1,2]\r\n</pre>\r\n\r\n<p>&nbsp;</p>\r\n<p><strong>Constraints:</strong></p>\r\n\r\n<ul>\r\n\t<li><code>1 &lt;= n &lt;= 500</code></li>\r\n\t<li><code>nums.length == 2n</code></li>\r\n\t<li><code>1 &lt;= nums[i] &lt;= 10^3</code></li>\r\n</ul>',
  translatedTitle: null,
  translatedContent: null,
  isPaidOnly: false,
  canSeeQuestion: true,
  difficulty: "Easy",
  likes: 4471,
  dislikes: 238,
  isLiked: null,
  similarQuestions: "[]",
  exampleTestcases: "[2,5,1,3,4,7]\n3\n[1,2,3,4,4,3,2,1]\n4\n[1,1,2,2]\n2",
  categoryTitle: "Algorithms",
  contributors: [],
  topicTags: [
    {
      name: "Array",
      slug: "array",
      translatedName: null,
      __typename: "TopicTagNode",
    },
  ],
  companyTagStats:
    '{"2": [{"taggedByAdmin": false, "name": "Amazon", "slug": "amazon", "timesEncountered": 4}, {"taggedByAdmin": true, "name": "Microsoft", "slug": "microsoft", "timesEncountered": 2}, {"taggedByAdmin": false, "name": "Google", "slug": "google", "timesEncountered": 2}], "1": [{"taggedByAdmin": false, "name": "Apple", "slug": "apple", "timesEncountered": 2}, {"taggedByAdmin": false, "name": "Bloomberg", "slug": "bloomberg", "timesEncountered": 2}], "3": [{"taggedByAdmin": false, "name": "Uber", "slug": "uber", "timesEncountered": 3}, {"taggedByAdmin": false, "name": "Adobe", "slug": "adobe", "timesEncountered": 2}]}',
  codeSnippets: [
    {
      lang: "C++",
      langSlug: "cpp",
      code: "class Solution {\npublic:\n    vector<int> shuffle(vector<int>& nums, int n) {\n        \n    }\n};",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Java",
      langSlug: "java",
      code: "class Solution {\n    public int[] shuffle(int[] nums, int n) {\n        \n    }\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Python",
      langSlug: "python",
      code: 'class Solution(object):\n    def shuffle(self, nums, n):\n        """\n        :type nums: List[int]\n        :type n: int\n        :rtype: List[int]\n        """\n        ',
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Python3",
      langSlug: "python3",
      code: "class Solution:\n    def shuffle(self, nums: List[int], n: int) -> List[int]:\n        ",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "C",
      langSlug: "c",
      code: "\n\n/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nint* shuffle(int* nums, int numsSize, int n, int* returnSize){\n\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "C#",
      langSlug: "csharp",
      code: "public class Solution {\n    public int[] Shuffle(int[] nums, int n) {\n        \n    }\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "JavaScript",
      langSlug: "javascript",
      code: "/**\n * @param {number[]} nums\n * @param {number} n\n * @return {number[]}\n */\nvar shuffle = function(nums, n) {\n    \n};",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Ruby",
      langSlug: "ruby",
      code: "# @param {Integer[]} nums\n# @param {Integer} n\n# @return {Integer[]}\ndef shuffle(nums, n)\n    \nend",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Swift",
      langSlug: "swift",
      code: "class Solution {\n    func shuffle(_ nums: [Int], _ n: Int) -> [Int] {\n        \n    }\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Go",
      langSlug: "golang",
      code: "func shuffle(nums []int, n int) []int {\n    \n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Scala",
      langSlug: "scala",
      code: "object Solution {\n    def shuffle(nums: Array[Int], n: Int): Array[Int] = {\n        \n    }\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Kotlin",
      langSlug: "kotlin",
      code: "class Solution {\n    fun shuffle(nums: IntArray, n: Int): IntArray {\n        \n    }\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "Rust",
      langSlug: "rust",
      code: "impl Solution {\n    pub fn shuffle(nums: Vec<i32>, n: i32) -> Vec<i32> {\n        \n    }\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "PHP",
      langSlug: "php",
      code: "class Solution {\n\n    /**\n     * @param Integer[] $nums\n     * @param Integer $n\n     * @return Integer[]\n     */\n    function shuffle($nums, $n) {\n        \n    }\n}",
      __typename: "CodeSnippetNode",
    },
    {
      lang: "TypeScript",
      langSlug: "typescript",
      code: "function shuffle(nums: number[], n: number): number[] {\n\n};",
      __typename: "CodeSnippetNode",
    },
  ],
  stats:
    '{"totalAccepted": "485.5K", "totalSubmission": "544.7K", "totalAcceptedRaw": 485536, "totalSubmissionRaw": 544694, "acRate": "89.1%"}',
  hints: [
    "Use two pointers to create the new array of 2n elements. The first starting at the beginning and the other starting at (n+1)th position. Alternate between them and create the new array.",
  ],
  solution: {
    id: "1668",
    canSeeDetail: true,
    paidOnly: false,
    hasVideoSolution: false,
    paidOnlyVideo: true,
    __typename: "ArticleNode",
  },
  status: "ac",
  sampleTestCase: "[2,5,1,3,4,7]\n3",
  metaData:
    '{\n  "name": "shuffle",\n  "params": [\n    {\n      "name": "nums",\n      "type": "integer[]"\n    },\n    {\n      "type": "integer",\n      "name": "n"\n    }\n  ],\n  "return": {\n    "type": "integer[]"\n  }\n}',
  judgerAvailable: true,
  judgeType: "large",
  mysqlSchemas: [],
  enableRunCode: true,
  enableTestMode: false,
  enableDebugger: true,
  envInfo:
    '{"cpp": ["C++", "<p>Compiled with <code> clang 11 </code> using the latest C++ 17 standard.</p>\\r\\n\\r\\n<p>Your code is compiled with level two optimization (<code>-O2</code>). <a href=\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\" target=\\"_blank\\">AddressSanitizer</a> is also enabled to help detect out-of-bounds and use-after-free bugs.</p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>"], "java": ["Java", "<p><code>OpenJDK 17</code>. Java 8 features such as lambda expressions and stream API can be used. </p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>\\r\\n<p>Includes <code>Pair</code> class from https://docs.oracle.com/javase/8/javafx/api/javafx/util/Pair.html.</p>"], "python": ["Python", "<p><code>Python 2.7.12</code>.</p>\\r\\n\\r\\n<p>Most libraries are already imported automatically for your convenience, such as <a href=\\"https://docs.python.org/2/library/array.html\\" target=\\"_blank\\">array</a>, <a href=\\"https://docs.python.org/2/library/bisect.html\\" target=\\"_blank\\">bisect</a>, <a href=\\"https://docs.python.org/2/library/collections.html\\" target=\\"_blank\\">collections</a>. If you need more libraries, you can import it yourself.</p>\\r\\n\\r\\n<p>For Map/TreeMap data structure, you may use <a href=\\"http://www.grantjenks.com/docs/sortedcontainers/\\" target=\\"_blank\\">sortedcontainers</a> library.</p>\\r\\n\\r\\n<p>Note that Python 2.7 <a href=\\"https://www.python.org/dev/peps/pep-0373/\\" target=\\"_blank\\">will not be maintained past 2020</a>. For the latest Python, please choose Python3 instead.</p>"], "c": ["C", "<p>Compiled with <code>gcc 8.2</code> using the gnu11 standard.</p>\\r\\n\\r\\n<p>Your code is compiled with level one optimization (<code>-O1</code>). <a href=\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\" target=\\"_blank\\">AddressSanitizer</a> is also enabled to help detect out-of-bounds and use-after-free bugs.</p>\\r\\n\\r\\n<p>Most standard library headers are already included automatically for your convenience.</p>\\r\\n\\r\\n<p>For hash table operations, you may use <a href=\\"https://troydhanson.github.io/uthash/\\" target=\\"_blank\\">uthash</a>. \\"uthash.h\\" is included by default. Below are some examples:</p>\\r\\n\\r\\n<p><b>1. Adding an item to a hash.</b>\\r\\n<pre>\\r\\nstruct hash_entry {\\r\\n    int id;            /* we\'ll use this field as the key */\\r\\n    char name[10];\\r\\n    UT_hash_handle hh; /* makes this structure hashable */\\r\\n};\\r\\n\\r\\nstruct hash_entry *users = NULL;\\r\\n\\r\\nvoid add_user(struct hash_entry *s) {\\r\\n    HASH_ADD_INT(users, id, s);\\r\\n}\\r\\n</pre>\\r\\n</p>\\r\\n\\r\\n<p><b>2. Looking up an item in a hash:</b>\\r\\n<pre>\\r\\nstruct hash_entry *find_user(int user_id) {\\r\\n    struct hash_entry *s;\\r\\n    HASH_FIND_INT(users, &user_id, s);\\r\\n    return s;\\r\\n}\\r\\n</pre>\\r\\n</p>\\r\\n\\r\\n<p><b>3. Deleting an item in a hash:</b>\\r\\n<pre>\\r\\nvoid delete_user(struct hash_entry *user) {\\r\\n    HASH_DEL(users, user);  \\r\\n}\\r\\n</pre>\\r\\n</p>"], "csharp": ["C#", "<p><a href=\\"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10\\" target=\\"_blank\\">C# 10 with .NET 6 runtime</a></p>"], "javascript": ["JavaScript", "<p><code>Node.js 16.13.2</code>.</p>\\r\\n\\r\\n<p>Your code is run with <code>--harmony</code> flag, enabling <a href=\\"http://node.green/\\" target=\\"_blank\\">new ES6 features</a>.</p>\\r\\n\\r\\n<p><a href=\\"https://lodash.com\\" target=\\"_blank\\">lodash.js</a> library is included by default.</p>\\r\\n\\r\\n<p>For Priority Queue / Queue data structures, you may use 5.3.0 version of <a href=\\"https://github.com/datastructures-js/priority-queue/tree/fb4fdb984834421279aeb081df7af624d17c2a03\\" target=\\"_blank\\">datastructures-js/priority-queue</a> and 4.2.1 version of <a href=\\"https://github.com/datastructures-js/queue/tree/e63563025a5a805aa16928cb53bcd517bfea9230\\" target=\\"_blank\\">datastructures-js/queue</a>.</p>"], "ruby": ["Ruby", "<p><code>Ruby 3.1</code></p>\\r\\n\\r\\n<p>Some common data structure implementations are provided in the Algorithms module: https://www.rubydoc.info/github/kanwei/algorithms/Algorithms</p>"], "swift": ["Swift", "<p><code>Swift 5.5.2</code>.</p>"], "golang": ["Go", "<p><code>Go 1.17.6</code>.</p>\\r\\n\\r\\n<p>Support <a href=\\"https://godoc.org/github.com/emirpasic/gods\\" target=\\"_blank\\">https://godoc.org/github.com/emirpasic/gods</a> library.</p>"], "python3": ["Python3", "<p><code>Python 3.10</code>.</p>\\r\\n\\r\\n<p>Most libraries are already imported automatically for your convenience, such as <a href=\\"https://docs.python.org/3/library/array.html\\" target=\\"_blank\\">array</a>, <a href=\\"https://docs.python.org/3/library/bisect.html\\" target=\\"_blank\\">bisect</a>, <a href=\\"https://docs.python.org/3/library/collections.html\\" target=\\"_blank\\">collections</a>. If you need more libraries, you can import it yourself.</p>\\r\\n\\r\\n<p>For Map/TreeMap data structure, you may use <a href=\\"http://www.grantjenks.com/docs/sortedcontainers/\\" target=\\"_blank\\">sortedcontainers</a> library.</p>"], "scala": ["Scala", "<p><code>Scala 2.13.7</code>.</p>"], "kotlin": ["Kotlin", "<p><code>Kotlin 1.3.10</code>.</p>"], "rust": ["Rust", "<p><code>Rust 1.58.1</code></p>\\r\\n\\r\\n<p>Supports <a href=\\"https://crates.io/crates/rand\\" target=\\"_blank\\">rand </a> v0.6\\u00a0from crates.io</p>"], "php": ["PHP", "<p><code>PHP 8.1</code>.</p>\\r\\n<p>With bcmath module</p>"], "typescript": ["Typescript", "<p><code>TypeScript 4.5.4, Node.js 16.13.2</code>.</p>\\r\\n\\r\\n<p>Your code is run with <code>--harmony</code> flag, enabling <a href=\\"http://node.green/\\" target=\\"_blank\\">new ES2020 features</a>.</p>\\r\\n\\r\\n<p><a href=\\"https://lodash.com\\" target=\\"_blank\\">lodash.js</a> library is included by default.</p>"]}',
  libraryUrl: null,
  adminUrl: null,
  challengeQuestion: {
    id: "1226",
    date: "2023-02-06",
    incompleteChallengeCount: 4,
    streakCount: 0,
    type: "DAILY",
    __typename: "ChallengeQuestionNode",
  },
  __typename: "QuestionNode",
};

import{test}from'node:test';import{strict as assert}from'node:assert';import{analyze,parseCsv}from'./analysis.mjs';test('labels keyword polarity',()=>{assert.equal(analyze('Strong growth').label,'Positive');assert.equal(analyze('Risk of decline').label,'Negative')});test('parses quoted CSV comma',()=>assert.equal(parseCsv('date,source,text\n2026-01-01,Example,"Growth, but risk"')[0].text,'Growth, but risk'));

test('labels delay concerns',()=>assert.equal(analyze('Concerned about delays').label,'Negative'));

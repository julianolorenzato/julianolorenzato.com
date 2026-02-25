// Define input structure for vertex shader
struct VSInput
{
    float3 position : POSITION;
    float3 color : COLOR0;
};

// Output of vertex shader / input of fragment shader
struct VSOutput
{
    float4 position : SV_Position;
    float3 color : COLOR0;
};

// Constant buffer (uniforms)
cbuffer Uniforms
{
    float4x4 modelViewProjection;
};

// Vertex Shader
VSOutput vertexMain(VSInput input)
{
    VSOutput output;

    output.position = mul(modelViewProjection, float4(input.position, 1.0));
    output.color = input.color;

    return output;
}

// Fragment Shader (Pixel Shader)
float4 fragmentMain(VSOutput input)
    : SV_Target
{
    return float4(input.color, 1.0);
}

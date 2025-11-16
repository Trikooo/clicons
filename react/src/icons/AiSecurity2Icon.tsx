import React from 'react';
import config from '../config';

interface AiSecurity2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiSecurity2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-security2)
 * @see {@link https://clicons.dev/icon/ai-security2}
 */
const AiSecurity2Icon = React.forwardRef<SVGSVGElement, AiSecurity2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.5 14.5L9.34189 8.97434C9.43631 8.69107 9.7014 8.5 10 8.5C10.2986 8.5 10.5637 8.69107 10.6581 8.97434L12.5 14.5M15.5 8.5V14.5M8.5 12.5H11.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 11.1832V8.28017C21 6.64016 21 5.82016 20.5959 5.28517C20.1918 4.75017 19.2781 4.49044 17.4507 3.97098C16.2022 3.61607 15.1016 3.18851 14.2223 2.79817C13.0234 2.26597 12.424 1.99988 12 1.99988C11.576 1.99988 10.9766 2.26597 9.77771 2.79817C8.89839 3.1885 7.79784 3.61607 6.54933 3.97098C4.72193 4.49044 3.80822 4.75017 3.40411 5.28517C3 5.82016 3 6.64016 3 8.28017V11.1832C3 16.8084 8.06277 20.1834 10.594 21.5193C11.2011 21.8397 11.5046 21.9999 12 21.9999C12.4954 21.9999 12.7989 21.8397 13.406 21.5193C15.9372 20.1834 21 16.8084 21 11.1832Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

AiSecurity2Icon.displayName = 'AiSecurity2Icon';
export default AiSecurity2Icon;

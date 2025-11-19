import React from 'react';
import config from '../config';

interface CallEnd2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CallEnd2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/call-end2)
 * @see {@link https://clicons.dev/icon/call-end2}
 */
const CallEnd2Icon = React.forwardRef<SVGSVGElement, CallEnd2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.0539 6.02918V8.79278C17.0539 9.35653 17.4143 9.87054 17.9747 10.1385C18.413 10.3481 18.9322 10.6067 19.3546 10.847C19.7452 11.0692 20.293 11.0557 20.6214 10.765L21.5133 9.97573C22.17 9.3945 22.1749 8.44418 21.4501 7.93021C15.9402 4.02326 8.05983 4.02326 2.54993 7.93021C1.82509 8.44418 1.82997 9.3945 2.48673 9.97573L3.3786 10.765C3.70697 11.0557 4.24369 11.0574 4.62554 10.8235C5.0468 10.5655 5.53006 10.3258 5.94613 10.1356C6.54384 9.86234 6.94607 9.3266 6.94607 8.73122V6.02918'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 15.5C9.18814 16.208 11.0197 19 12 19C12.9803 19 14.8119 16.208 15.5 15.5M12 18.5V11'
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

CallEnd2Icon.displayName = 'CallEnd2Icon';
export default CallEnd2Icon;

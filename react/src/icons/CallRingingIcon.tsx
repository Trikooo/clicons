import React from 'react';
import config from '../config';

interface CallRingingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CallRingingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/call-ringing)
 * @see {@link https://clicons.dev/icon/call-ringing}
 */
const CallRingingIcon = React.forwardRef<SVGSVGElement, CallRingingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.0539 14.0292V16.7928C17.0539 17.3565 17.4143 17.8705 17.9747 18.1385C18.413 18.3481 18.9322 18.6067 19.3546 18.847C19.7452 19.0692 20.293 19.0557 20.6214 18.765L21.5133 17.9757C22.17 17.3945 22.1749 16.4442 21.4501 15.9302C15.9402 12.0233 8.05983 12.0233 2.54993 15.9302C1.82509 16.4442 1.82997 17.3945 2.48673 17.9757L3.3786 18.765C3.70697 19.0557 4.24369 19.0574 4.62554 18.8235C5.0468 18.5655 5.53006 18.3258 5.94613 18.1356C6.54384 17.8623 6.94607 17.3266 6.94607 16.7312V14.0292'
    }
  ],
  [
    'path',
    {
      d: 'M12 5V8M18 8L16 10M6 8L8 10'
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

CallRingingIcon.displayName = 'CallRingingIcon';
export default CallRingingIcon;

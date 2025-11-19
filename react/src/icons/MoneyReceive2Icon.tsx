import React from 'react';
import config from '../config';

interface MoneyReceive2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneyReceive2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-receive2)
 * @see {@link https://clicons.dev/icon/money-receive2}
 */
const MoneyReceive2Icon = React.forwardRef<SVGSVGElement, MoneyReceive2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.4998 14.001C14.4998 15.3817 13.3805 16.501 11.9998 16.501C10.619 16.501 9.49976 15.3817 9.49976 14.001C9.49976 12.6203 10.619 11.501 11.9998 11.501C13.3805 11.501 14.4998 12.6203 14.4998 14.001Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 7.00293C18.9452 7.08767 20.3228 7.40675 21.1329 7.6578C21.6756 7.82599 22 8.34037 22 8.90853V18.6833C22 19.7984 20.7719 20.6375 19.6762 20.4305C18.7361 20.253 17.5107 20.1104 16 20.1104C11.2491 20.1104 10.1096 21.9161 3.1448 20.3802C2.47265 20.232 2 19.6275 2 18.9392V8.92217C2 7.94632 2.92079 7.23467 3.87798 7.42461C5.31598 7.70997 6.49012 7.8435 7.5 7.87953'
    }
  ],
  [
    'path',
    {
      d: 'M2 11.001C3.95133 11.001 5.70483 9.40605 5.92901 7.75514M18.5005 7.50098C18.5005 9.54062 20.2655 11.47 22 11.47M22 17.001C20.1009 17.001 18.2601 18.3112 18.102 20.0993M6.00049 20.4971C6.00049 18.2879 4.20963 16.4971 2.00049 16.4971'
    }
  ],
  [
    'path',
    {
      d: 'M12 8.50098L12 3.00098M12 8.50098C12.7002 8.50098 14.5 6.00098 14.5 6.00098M12 8.50098C11.2998 8.50098 9.5 6.00098 9.5 6.00098'
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

MoneyReceive2Icon.displayName = 'MoneyReceive2Icon';
export default MoneyReceive2Icon;

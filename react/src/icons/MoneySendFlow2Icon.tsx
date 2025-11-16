import React from 'react';
import config from '../config';

interface MoneySendFlow2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneySendFlow2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-send-flow2)
 * @see {@link https://clicons.dev/icon/money-send-flow2}
 */
const MoneySendFlow2Icon = React.forwardRef<SVGSVGElement, MoneySendFlow2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.4998 10.5C14.4998 11.8807 13.3805 13 11.9998 13C10.619 13 9.49976 11.8807 9.49976 10.5C9.49976 9.11929 10.619 8 11.9998 8C13.3805 8 14.4998 9.11929 14.4998 10.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 16.6584C18.3442 16.715 19.0696 16.815 19.6762 16.9295C20.7719 17.1364 22 16.2974 22 15.1823V5.42705C22 4.85889 21.6756 4.34452 21.1329 4.17632C20.1903 3.88421 18.4794 3.5 16 3.5C11.4209 3.5 10.1967 5.17747 3.87798 3.92361C2.92079 3.73366 2 4.44531 2 5.42116V15.4382C2 16.1265 2.47265 16.731 3.1448 16.8792C4.44602 17.1662 5.5439 17.3365 6.5 17.4237'
    }
  ],
  [
    'path',
    {
      d: 'M2 7.5C3.95133 7.5 5.70483 5.90507 5.92901 4.25417M18.5005 4C18.5005 6.03964 20.2655 7.96899 22 7.96899M22 13.5C20.1009 13.5 18.2601 14.8102 18.102 16.5983M6.00049 16.9961C6.00049 14.787 4.20963 12.9961 2.00049 12.9961'
    }
  ],
  [
    'path',
    {
      d: 'M12 16.5V20.5M15 16.5V18.5M9 16.5V18.5'
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

MoneySendFlow2Icon.displayName = 'MoneySendFlow2Icon';
export default MoneySendFlow2Icon;

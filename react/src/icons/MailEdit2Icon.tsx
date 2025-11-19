import React from 'react';
import config from '../config';

interface MailEdit2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailEdit2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mail-edit2)
 * @see {@link https://clicons.dev/icon/mail-edit2}
 */
const MailEdit2Icon = React.forwardRef<SVGSVGElement, MailEdit2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.00235 7.75L9.94437 9.48943C11.6596 10.5035 12.3451 10.5035 14.0603 9.48943L17.0023 7.75'
    }
  ],
  [
    'path',
    {
      d: 'M21.9977 10.75V9.77844C21.9323 6.71114 21.8996 5.17749 20.7679 4.04141C19.6361 2.90532 18.061 2.86574 14.9107 2.78659C12.9692 2.73781 11.0467 2.7378 9.10511 2.78658C5.95487 2.86573 4.37975 2.9053 3.24799 4.04139C2.11624 5.17748 2.08353 6.71113 2.01812 9.77843C1.99709 10.7647 1.99709 11.7451 2.01812 12.7314C2.08354 15.7987 2.11624 17.3323 3.248 18.4684C4.37975 19.6045 5.95487 19.6441 9.10512 19.7232C9.57337 19.735 10.5358 19.7439 11.0024 19.75'
    }
  ],
  [
    'path',
    {
      d: 'M20.8546 13.6893L21.547 14.3817C22.1327 14.9675 22.1327 15.9172 21.547 16.503L17.9196 20.1987C17.6342 20.484 17.2692 20.6764 16.8725 20.7505L14.6244 21.2385C14.2694 21.3156 13.9533 21.0004 14.0294 20.6452L14.5079 18.4099C14.582 18.0132 14.7743 17.6482 15.0597 17.3629L18.7333 13.6893C19.3191 13.1036 20.2688 13.1036 20.8546 13.6893Z'
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

MailEdit2Icon.displayName = 'MailEdit2Icon';
export default MailEdit2Icon;
